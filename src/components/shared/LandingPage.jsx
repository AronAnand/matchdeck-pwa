import React from 'react';
import { navigate } from './Router';
import './LandingPage.css';

export default function LandingPage() {
    return (
        <div className="landing-page">
            <div className="landing-container">
                <h1 className="landing-title">MatchDeck</h1>
                <p className="landing-subtitle">Tournament Card Selection System</p>

                <div className="landing-options">
                    <div className="option-card" onClick={() => navigate('/admin')}>
                        <div className="option-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
                            </svg>
                        </div>
                        <h2>Admin Portal</h2>
                        <p>Create and manage tournaments, view player selections</p>
                    </div>

                    <div className="option-card" onClick={() => navigate('/player')}>
                        <div className="option-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <path d="M3 9h18"></path>
                                <path d="M9 21V9"></path>
                            </svg>
                        </div>
                        <h2>Player Entry</h2>
                        <p>Enter your code to select your match card</p>
                    </div>
                </div>

                <div className="landing-footer">
                    <p>Powered by MatchDeck PWA</p>
                </div>
            </div>
        </div>
    );
}
