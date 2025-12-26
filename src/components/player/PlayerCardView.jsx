import React from 'react';
import Card from '../Card';
import './PlayerCardView.css';

export default function PlayerCardView({ playerName, matchdayNumber, selectedCard, code, onExit }) {
    return (
        <div className="player-card-view">
            <div className="player-card-header">
                <div>
                    <h2>{playerName}</h2>
                    <p>Matchday {matchdayNumber}</p>
                    <p className="player-code">Code: <span>{code}</span></p>
                </div>
            </div>

            <div className="player-card-content">
                <div className="selection-notice">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>You've selected your card for Matchday {matchdayNumber}</span>
                </div>

                <div className="selected-card-display">
                    <Card card={selectedCard} isRevealed={true} />
                </div>

                <div className="card-view-actions">
                    <button onClick={onExit} className="btn-exit">
                        Exit
                    </button>
                </div>

                <p className="card-view-note">
                    You cannot change your selection. Contact the admin if you need to reset.
                </p>
            </div>
        </div>
    );
}
