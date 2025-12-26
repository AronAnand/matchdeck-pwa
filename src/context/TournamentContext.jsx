import React, { createContext, useState, useContext, useEffect } from 'react';
import { CARD_LIBRARY, RARITY, CARD_EFFECT } from '../data/cards';
import { saveTournaments, loadTournaments } from '../utils/storage';
import { generateUniqueCode } from '../utils/codeGenerator';
import {
    saveTournament,
    loadTournamentsFromFirestore,
    deleteTournamentFromFirestore,
    subscribeToTournaments
} from '../utils/firestore';

const TournamentContext = createContext();

export const useTournament = () => useContext(TournamentContext);

export const TournamentProvider = ({ children }) => {
    // Multi-tournament state
    const [tournaments, setTournaments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Legacy state for backward compatibility with existing DrawScreen
    const [tournament, setTournament] = useState(null);
    const [drawnCard, setDrawnCard] = useState(null);
    const [history, setHistory] = useState([]);

    // Load tournaments from Firestore on mount and subscribe to real-time updates
    useEffect(() => {
        console.log('Setting up Firestore real-time listener...');

        // Subscribe to real-time updates
        const unsubscribe = subscribeToTournaments((updatedTournaments) => {
            console.log('Tournaments updated from Firestore:', updatedTournaments);
            setTournaments(updatedTournaments);
            setIsLoading(false);
        });

        // Cleanup subscription on unmount
        return () => {
            console.log('Unsubscribing from Firestore');
            unsubscribe();
        };
    }, []);

    // ===== TOURNAMENT MANAGEMENT FUNCTIONS =====

    /**
     * Helper: Save tournament to Firestore
     */
    const saveTournamentToFirestore = async (tournament) => {
        await saveTournament(tournament);
    };

    /**
     * Get all existing codes from all tournaments
     */
    const getAllCodes = () => {
        const codes = [];
        tournaments.forEach(tournament => {
            tournament.players.forEach(player => {
                player.matchdays.forEach(matchday => {
                    codes.push(matchday.code);
                });
            });
        });
        return codes;
    };

    /**
     * Create a new tournament with initial players
     */
    const createTournamentNew = (name, playerNames) => {
        const tournamentId = Date.now().toString();
        const existingCodes = getAllCodes();

        const players = playerNames.map((playerName, index) => ({
            id: `${tournamentId}-player-${index}`,
            name: playerName.trim(),
            isActive: true,
            createdAt: Date.now(),
            matchdays: [{
                matchdayNumber: 1,
                code: generateUniqueCode(existingCodes.concat(
                    Array(index).fill(0).map((_, i) => existingCodes[existingCodes.length - 1 - i])
                )),
                hasLoggedIn: false,
                selectedCard: null,
                pack: null,
                selectedAt: null
            }]
        }));

        const newTournament = {
            id: tournamentId,
            name,
            createdAt: Date.now(),
            currentMatchday: 1,
            status: 'active',
            players
        };

        // Save to Firestore (real-time listener will update state)
        saveTournament(newTournament);
        return newTournament;
    };

    /**
     * Legacy createTournament for backward compatibility
     */
    const createTournament = (name, players) => {
        setTournament({
            id: Date.now(),
            name,
            players: parseInt(players) || 2,
            matches: [],
            status: 'active'
        });
    };

    /**
     * Add a player to an existing tournament
     */
    const addPlayer = async (tournamentId, playerName) => {
        const tournament = tournaments.find(t => t.id === tournamentId);
        if (!tournament) return;

        const existingCodes = getAllCodes();
        const playerId = `${tournamentId}-player-${tournament.players.length}`;

        const newPlayer = {
            id: playerId,
            name: playerName.trim(),
            isActive: true,
            createdAt: Date.now(),
            matchdays: [{
                matchdayNumber: tournament.currentMatchday,
                code: generateUniqueCode(existingCodes),
                hasLoggedIn: false,
                selectedCard: null,
                pack: null,
                selectedAt: null
            }]
        };

        const updatedTournament = {
            ...tournament,
            players: [...tournament.players, newPlayer]
        };

        await saveTournament(updatedTournament);
    };

    /**
     * Delete (deactivate) a player
     */
    const deletePlayer = async (tournamentId, playerId) => {
        const tournament = tournaments.find(t => t.id === tournamentId);
        if (!tournament) return;

        const updatedTournament = {
            ...tournament,
            players: tournament.players.map(player =>
                player.id === playerId ? { ...player, isActive: false } : player
            )
        };

        await saveTournament(updatedTournament);
    };

    /**
     * Delete an entire tournament
     */
    const deleteTournament = async (tournamentId) => {
        await deleteTournamentFromFirestore(tournamentId);
    };

    /**
     * Reset a player's selection and generate new code
     */
    const resetPlayerSelection = async (tournamentId, playerId) => {
        const tournament = tournaments.find(t => t.id === tournamentId);
        if (!tournament) return;

        const allExistingCodes = getAllCodes();

        const updatedTournament = {
            ...tournament,
            players: tournament.players.map(player => {
                if (player.id !== playerId) return player;

                // Find current matchday data
                const currentMatchdayData = player.matchdays.find(
                    m => m.matchdayNumber === tournament.currentMatchday
                );

                if (!currentMatchdayData) return player;

                // Generate new code (excluding the old code being replaced)
                const newCode = generateUniqueCode(
                    allExistingCodes.filter(c => c !== currentMatchdayData.code)
                );

                console.log(`Reset player ${player.name}: old code ${currentMatchdayData.code} → new code ${newCode}`);

                return {
                    ...player,
                    matchdays: player.matchdays.map(m =>
                        m.matchdayNumber === tournament.currentMatchday
                            ? {
                                ...m,
                                code: newCode,
                                hasLoggedIn: false,
                                selectedCard: null,
                                pack: null,
                                selectedAt: null
                            }
                            : m
                    )
                };
            })
        };

        await saveTournament(updatedTournament);
    };

    /**
     * Start a new matchday for a tournament
     */
    const startNewMatchday = async (tournamentId) => {
        const tournament = tournaments.find(t => t.id === tournamentId);
        if (!tournament) return;

        const newMatchdayNumber = tournament.currentMatchday + 1;
        const existingCodes = getAllCodes();

        const updatedTournament = {
            ...tournament,
            currentMatchday: newMatchdayNumber,
            players: tournament.players.map(player => {
                // Only add new matchday for active players
                if (!player.isActive) return player;

                return {
                    ...player,
                    matchdays: [
                        ...player.matchdays,
                        {
                            matchdayNumber: newMatchdayNumber,
                            code: generateUniqueCode(existingCodes),
                            hasLoggedIn: false,
                            selectedCard: null,
                            pack: null,
                            selectedAt: null
                        }
                    ]
                };
            })
        };

        await saveTournament(updatedTournament);
    };

    /**
     * Validate player login code and return player data
     */
    const playerLogin = (code) => {
        console.log('playerLogin called with code:', code);
        console.log('Total tournaments:', tournaments.length);
        console.log('Tournaments:', tournaments);

        for (const tournament of tournaments) {
            console.log(`Checking tournament: ${tournament.name} (Matchday ${tournament.currentMatchday})`);
            console.log('Players in tournament:', tournament.players.length);

            for (const player of tournament.players) {
                if (!player.isActive) {
                    console.log(`Skipping inactive player: ${player.name}`);
                    continue;
                }

                console.log(`Checking player: ${player.name}`);
                console.log('Player matchdays:', player.matchdays);

                const matchdayData = player.matchdays.find(
                    m => m.matchdayNumber === tournament.currentMatchday && m.code === code
                );

                if (matchdayData) {
                    console.log('MATCH FOUND!', matchdayData);
                    return {
                        valid: true,
                        tournament,
                        player,
                        matchdayData,
                        currentMatchday: tournament.currentMatchday
                    };
                } else {
                    const currentMatchdayData = player.matchdays.find(
                        m => m.matchdayNumber === tournament.currentMatchday
                    );
                    console.log(`No match for ${player.name}. Their code is:`, currentMatchdayData?.code);
                }
            }
        }

        console.log('No matching code found in any tournament');
        return { valid: false };
    };

    /**
     * Save player's card selection
     */
    const savePlayerSelection = async (code, selectedCard, pack) => {
        // Find the tournament that contains this code
        for (const tournament of tournaments) {
            let updated = false;

            const updatedPlayers = tournament.players.map(player => {
                if (!player.isActive) return player;

                const updatedMatchdays = player.matchdays.map(matchday => {
                    if (matchday.code === code && matchday.matchdayNumber === tournament.currentMatchday) {
                        updated = true;
                        return {
                            ...matchday,
                            hasLoggedIn: true,
                            selectedCard,
                            pack,
                            selectedAt: Date.now()
                        };
                    }
                    return matchday;
                });

                return updated ? { ...player, matchdays: updatedMatchdays } : player;
            });

            if (updated) {
                const updatedTournament = { ...tournament, players: updatedPlayers };
                console.log('Saving player selection to Firestore:', {
                    tournamentId: updatedTournament.id,
                    selectedCard,
                    code
                });
                await saveTournament(updatedTournament);
                console.log('Player selection saved successfully');
                return;
            }
        }
    };

    /**
     * Get a tournament by ID
     */
    const getTournamentById = (tournamentId) => {
        return tournaments.find(t => t.id === tournamentId);
    };

    /**
     * Force reload tournaments from localStorage
     */
    const reloadTournaments = () => {
        const loaded = loadTournaments();
        console.log('Reloading tournaments from localStorage:', loaded);
        setTournaments(loaded);
    };

    const drawCard = () => {
        // Weighted Random Logic
        const getWeightedCard = () => {
            const rand = Math.random() * 100;
            let selectedRarity = RARITY.COMMON;

            if (rand > 93) selectedRarity = RARITY.LEGENDARY; // Top 7%
            else if (rand > 75) selectedRarity = RARITY.EPIC; // Next 18% (75-93)
            else if (rand > 45) selectedRarity = RARITY.RARE; // Next 30% (45-75)
            else selectedRarity = RARITY.COMMON; // Bottom 45%

            // Filter cards by rarity
            const pool = CARD_LIBRARY.filter(c => c.rarity === selectedRarity);

            // Pick random from pool
            return pool[Math.floor(Math.random() * pool.length)];
        };

        return getWeightedCard();
    };

    const openPack = () => {
        const pack = [];

        // Helper function to draw a card from a specific pool with weighted rarity
        const drawCardFromPool = (pool) => {
            const rand = Math.random() * 100;
            let selectedRarity = RARITY.COMMON;

            if (rand > 93) selectedRarity = RARITY.LEGENDARY; // Top 7%
            else if (rand > 75) selectedRarity = RARITY.EPIC; // Next 18% (75-93)
            else if (rand > 45) selectedRarity = RARITY.RARE; // Next 30% (45-75)
            else selectedRarity = RARITY.COMMON; // Bottom 45%

            // Filter pool by rarity
            const rarityPool = pool.filter(c => c.rarity === selectedRarity);

            // If no cards of that rarity in this pool, fallback to any from pool
            if (rarityPool.length === 0) {
                return pool[Math.floor(Math.random() * pool.length)];
            }

            return rarityPool[Math.floor(Math.random() * rarityPool.length)];
        };

        // Draw 4 constraint cards (cards without effect property or with CONSTRAINT effect)
        // Constraint cards are IDs 1-180
        const constraintCards = CARD_LIBRARY.filter(card =>
            card.id <= 180 || card.effect === CARD_EFFECT.CONSTRAINT
        );
        for (let i = 0; i < 4; i++) {
            pack.push(drawCardFromPool(constraintCards));
        }

        // Draw 1 beneficial card (cards with BENEFIT effect)
        // Beneficial cards are IDs 181-260
        const benefitCards = CARD_LIBRARY.filter(card =>
            card.effect === CARD_EFFECT.BENEFIT
        );
        pack.push(drawCardFromPool(benefitCards));

        // Shuffle the pack so benefit card isn't always last
        const shuffledPack = pack.sort(() => Math.random() - 0.5);

        setDrawnCard(null); // Clear previous selection
        return shuffledPack;
    };

    const selectCard = (card) => {
        setDrawnCard(card);
        setHistory(prev => [card, ...prev]);
    };

    const resetDraw = () => {
        setDrawnCard(null);
    };

    return (
        <TournamentContext.Provider value={{
            // Legacy values for backward compatibility
            tournament,
            createTournament,
            drawCard,
            openPack,
            selectCard,
            drawnCard,
            resetDraw,
            history,
            // New tournament management
            tournaments,
            createTournamentNew,
            addPlayer,
            deletePlayer,
            deleteTournament,
            resetPlayerSelection,
            startNewMatchday,
            playerLogin,
            savePlayerSelection,
            getTournamentById,
            getAllCodes
        }}>
            {children}
        </TournamentContext.Provider>
    );
};
