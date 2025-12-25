import React, { createContext, useState, useContext } from 'react';
import { CARD_LIBRARY, RARITY } from '../data/cards';

const TournamentContext = createContext();

export const useTournament = () => useContext(TournamentContext);

export const TournamentProvider = ({ children }) => {
    const [tournament, setTournament] = useState(null);
    const [drawnCard, setDrawnCard] = useState(null);
    const [history, setHistory] = useState([]);

    const createTournament = (name, players) => {
        setTournament({
            id: Date.now(),
            name,
            players: parseInt(players) || 2,
            matches: [],
            status: 'active'
        });
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
        const pack = Array(5).fill(null).map(() => drawCard());
        setDrawnCard(null); // Clear previous selection
        return pack;
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
            tournament,
            createTournament,
            drawCard,
            openPack,
            selectCard,
            drawnCard,
            resetDraw,
            history
        }}>
            {children}
        </TournamentContext.Provider>
    );
};
