import React, { useState } from 'react';
import { useTournament } from '../context/TournamentContext';

const Home = ({ onStartDraw }) => {
    const [name, setName] = useState('');

    const handleStart = () => {
        // For MVP, simple start
        onStartDraw();
    };

    return (
        <div className="home-container">
            <div className="hero-section">
                <h1 className="title-gradient">MatchDeck</h1>
                <p className="subtitle">eFootball Tournament Conductor</p>
            </div>

            <div className="action-card">
                <h2>Quick Match</h2>
                <p>Draw a rule card and play immediately.</p>
                <button className="btn btn-primary" onClick={handleStart}>
                    Enter Match
                </button>
            </div>

            <div className="action-card disabled">
                <h2>Tournament Mode</h2>
                <p>Coming Soon</p>
            </div>

            <div className="stats-bar">
                <span>Chaos over Perfection</span>
            </div>
        </div>
    );
};

export default Home;
