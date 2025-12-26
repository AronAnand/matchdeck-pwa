import React, { useState, useEffect } from 'react';
import { useTournament } from '../../context/TournamentContext';
import { navigate } from '../shared/Router';
import { formatCodeInput, isValidCodeFormat } from '../../utils/codeGenerator';
import { loadTournaments } from '../../utils/storage';
import './PlayerLogin.css';

export default function PlayerLogin() {
    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { playerLogin, tournaments } = useTournament();

    // Log tournaments on mount to debug
    useEffect(() => {
        console.log('PlayerLogin mounted. Tournaments in context:', tournaments);
        console.log('Tournaments in localStorage:', loadTournaments());
    }, [tournaments]);

    const handleCodeChange = (e) => {
        const formatted = formatCodeInput(e.target.value);
        setCode(formatted);
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        console.log('Attempting login with code:', code);

        // Validate format
        if (!isValidCodeFormat(code)) {
            console.log('Code format invalid');
            setError('Invalid code format. Please use format: ABCD-1234');
            setIsLoading(false);
            return;
        }

        console.log('Code format valid, checking against tournaments...');

        // Validate code with tournament system
        const result = playerLogin(code);

        console.log('Login result:', result);

        if (result.valid) {
            console.log('Code valid! Navigating to draw screen');
            // Navigate to draw screen with code
            navigate(`/player/draw/${code}`);
        } else {
            console.log('Code invalid');
            setError('Invalid code. Please check your code and try again.');
            setCode('');
        }

        setIsLoading(false);
    };

    return (
        <div className="player-login">
            <div className="player-login-container">
                <h1>MatchDeck</h1>
                <p className="player-login-subtitle">Player Entry</p>

                <form onSubmit={handleSubmit} className="player-login-form">
                    <div className="form-group">
                        <label htmlFor="code">Enter Your Login Code</label>
                        <input
                            id="code"
                            type="text"
                            value={code}
                            onChange={handleCodeChange}
                            placeholder="ABCD-1234"
                            className="code-input"
                            maxLength={9}
                            autoFocus
                            required
                            disabled={isLoading}
                        />
                        <p className="form-hint">
                            Enter the code provided by your tournament admin
                        </p>
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <button
                        type="submit"
                        className="btn-primary"
                        disabled={isLoading || code.length < 9}
                    >
                        {isLoading ? 'Verifying...' : 'Enter Tournament'}
                    </button>
                </form>

                <button
                    onClick={() => navigate('/')}
                    className="btn-secondary"
                    style={{ marginTop: '20px' }}
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
}
