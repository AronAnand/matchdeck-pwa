import React from 'react';
import './Card.css';

const Card = ({ card, isRevealed = true, onClick }) => {
    // Show back if not revealed OR if no card data
    if (!isRevealed || !card) {
        return (
            <div className="card card-back" onClick={onClick}>
                <div className="card-pattern"></div>
                <div className="card-logo">MD</div>
            </div>
        );
    }

    const { title, text, rarity, type } = card;

    return (
        <div className={`card card-${rarity} ${isRevealed ? 'revealed' : ''}`} onClick={onClick}>
            <div className="card-inner">
                <div className="card-header">
                    <span className="card-type">{type.toUpperCase()}</span>
                    <span className="card-rarity-badge">{rarity}</span>
                </div>
                <div className="card-content">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">{text}</p>
                </div>
                <div className="card-footer">
                    <span className="verification-tip">📷 Verify via Screenshot</span>
                </div>
            </div>
            <div className="card-shine"></div>
        </div>
    );
};

export default Card;
