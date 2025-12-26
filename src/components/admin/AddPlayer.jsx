import React, { useState } from 'react';
import { useTournament } from '../../context/TournamentContext';

export default function AddPlayer({ tournamentId, onClose }) {
    const [playerName, setPlayerName] = useState('');
    const [error, setError] = useState('');
    const { addPlayer } = useTournament();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!playerName.trim()) {
            setError('Please enter a player name');
            return;
        }

        addPlayer(tournamentId, playerName.trim());
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Add Player</h2>
                    <button onClick={onClose} className="modal-close">×</button>
                </div>

                <form onSubmit={handleSubmit} className="modal-form">
                    <div className="form-group">
                        <label htmlFor="playerName">Player Name</label>
                        <input
                            id="playerName"
                            type="text"
                            value={playerName}
                            onChange={(e) => setPlayerName(e.target.value)}
                            placeholder="Enter player name"
                            autoFocus
                            required
                        />
                        <p className="form-hint">
                            A login code will be generated automatically for the current matchday.
                        </p>
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <div className="modal-actions">
                        <button type="button" onClick={onClose} className="btn-secondary">
                            Cancel
                        </button>
                        <button type="submit" className="btn-primary">
                            Add Player
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
