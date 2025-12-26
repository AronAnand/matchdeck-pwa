import React, { useState, useEffect } from 'react';
import { useTournament } from '../../context/TournamentContext';
import { navigate } from '../shared/Router';
import Card from '../Card';
import './PlayerDrawScreen.css';

export default function PlayerDrawScreen({ code }) {
    const { playerLogin, savePlayerSelection, openPack } = useTournament();
    const [playerData, setPlayerData] = useState(null);
    const [pack, setPack] = useState(null);
    const [packOpened, setPackOpened] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [tempSelectedCard, setTempSelectedCard] = useState(null);

    // Load player data
    useEffect(() => {
        const result = playerLogin(code);

        if (!result.valid) {
            alert('Invalid code or session expired');
            navigate('/player');
            return;
        }

        setPlayerData(result);

        // If player has already selected a card, restore pack and show confirmation screen
        if (result.matchdayData.selectedCard && result.matchdayData.pack) {
            setPack(result.matchdayData.pack);
            setTempSelectedCard(result.matchdayData.selectedCard);
            setShowConfirmation(true);
            // Don't set selectedCard yet - only after they click confirm
        }
    }, [code, playerLogin]);

    const handleOpenPack = () => {
        const newPack = openPack();
        setPack(newPack);

        setTimeout(() => {
            setPackOpened(true);
        }, 800);
    };

    const handleSelectCard = async (card) => {
        // Save selection immediately to database
        console.log('Card selected, saving to database:', card);
        console.log('Pack:', pack);
        await savePlayerSelection(code, card, pack);
        console.log('Selection saved, showing confirmation');
        setTempSelectedCard(card);
        setShowConfirmation(true);
    };


    const handleExit = () => {
        navigate('/');
    };

    if (!playerData) {
        return <div className="loading-screen">Loading...</div>;
    }

    // If pack not opened yet, show pack
    if (!pack) {
        return (
            <div className="player-draw-screen">
                <div className="player-info">
                    <h2>{playerData.player.name}</h2>
                    <p>Matchday {playerData.currentMatchday}</p>
                </div>

                <div className="pack-container">
                    <div className="pack-closed" onClick={handleOpenPack}>
                        <div className="pack-card">
                            <div className="pack-back">
                                <div className="pack-logo">MD</div>
                                <div className="pack-dots"></div>
                            </div>
                        </div>
                        <p className="pack-hint">Tap to Open</p>
                    </div>
                </div>
            </div>
        );
    }

    // Show confirmation screen with all cards revealed
    if (showConfirmation) {
        return (
            <div className="player-draw-screen">
                <div className="player-info">
                    <h2>{playerData.player.name}</h2>
                    <p>Matchday {playerData.currentMatchday}</p>
                </div>

                <div className="card-confirmation">
                    <h3>You Selected: {tempSelectedCard.title}</h3>
                    <p className="reveal-message">All cards from your pack revealed below</p>
                    <div className="cards-grid-reveal">
                        {pack.map((card, index) => {
                            const isSelected = card.id === tempSelectedCard.id;
                            return (
                                <div
                                    key={index}
                                    className={`card-reveal-wrapper ${isSelected ? 'selected-highlight' : ''}`}
                                >
                                    <Card
                                        card={card}
                                        isRevealed={true}
                                    />
                                    {isSelected && (
                                        <div className="your-card-badge">YOUR CARD</div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }

    // Show pack of cards
    return (
        <div className="player-draw-screen">
            <div className="player-info">
                <h2>{playerData.player.name}</h2>
                <p>Matchday {playerData.currentMatchday}</p>
            </div>

            {!packOpened ? (
                <div className="pack-opening">
                    <div className="pack-animation">Opening pack...</div>
                </div>
            ) : (
                <div className="card-selection">
                    <h3>Pick a Card</h3>
                    <div className="cards-grid">
                        {pack.map((card, index) => (
                            <div
                                key={index}
                                className="card-wrapper"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <Card
                                    card={card}
                                    isRevealed={false}
                                    onClick={() => handleSelectCard(card)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
