import React, { useState, useEffect, useRef } from 'react';
import { useTournament } from '../context/TournamentContext';
import Card from './Card';
import './DrawScreen.css';

const DrawScreen = ({ onBack }) => {
    const { openPack, selectCard, drawnCard, resetDraw } = useTournament();
    const [pack, setPack] = useState(null);
    const [isRevealed, setIsRevealed] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        resetDraw();
    }, []);


    const handleOpenPack = () => {
        if (pack) return;

        setIsAnimating(true);

        // Simulate "Pack Opening" delay
        setTimeout(() => {
            const newPack = openPack();
            setPack(newPack);
            setIsAnimating(false);
            setIsRevealed(false); // Unrevealed cards

            // Auto-scroll to center a bit
            if (containerRef.current) {
                containerRef.current.scrollLeft = 100;
            }
        }, 800);
    };

    const handleSelect = (card) => {
        selectCard(card);
    };

    const handleNext = () => {
        setPack(null);
        setIsRevealed(false);
        resetDraw();
    };

    // If a card is selected, show just that one big
    if (drawnCard) {
        return (
            <div className="draw-container">
                <div className="card-stage confirmed">
                    <Card card={drawnCard} isRevealed={true} />
                </div>
                <div className="controls">
                    <div className="action-buttons">
                        <button className="btn btn-secondary" onClick={handleNext}>
                            Open New Pack
                        </button>
                        <button className="btn btn-primary" onClick={onBack}>
                            Finish
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="draw-container">
            {!pack ? (
                // Initial Pack View
                <div className="pack-container">
                    <div className={`card-stage ${isAnimating ? 'shaking' : ''}`}>
                        <div className="pack-wrapper" onClick={handleOpenPack}>
                            <div className="card card-back">
                                <div className="card-pattern"></div>
                                <div className="card-logo">PACK</div>
                                <div className="pack-label">Tap to Open</div>
                            </div>
                        </div>
                    </div>
                    {!isAnimating && (
                        <button className="btn btn-secondary btn-small" onClick={onBack} style={{ marginTop: '2rem', maxWidth: '200px' }}>Back to Home</button>
                    )}
                </div>
            ) : (
                // Revealed 5 Cards View (Actually Unrevealed Backs)
                <div className="pack-grid-container fade-in">
                    <h3 className="select-title">Pick a Card...</h3>
                    <div className="cards-scroll" ref={containerRef}>
                        {pack && pack.map((card, index) => (
                            <div key={index} className="card-wrapper-small" style={{ animationDelay: `${index * 100}ms` }}>
                                <Card
                                    card={card}
                                    isRevealed={false}
                                    onClick={() => handleSelect(card)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="controls">
                {!isRevealed && !isAnimating && (
                    <p className="hint-text">5 Cards Inside</p>
                )}
            </div>
        </div>
    );
};

export default DrawScreen;
