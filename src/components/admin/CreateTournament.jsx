import React, { useState } from 'react';
import { useTournament } from '../../context/TournamentContext';
import { navigate } from '../shared/Router';
import './CreateTournament.css';

export default function CreateTournament({ onClose }) {
    const [tournamentName, setTournamentName] = useState('');
    const [playerNamesText, setPlayerNamesText] = useState('');
    const [error, setError] = useState('');
    const { createTournamentNew } = useTournament();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Validate tournament name
        if (!tournamentName.trim()) {
            setError('Please enter a tournament name');
            return;
        }

        // Parse player names (one per line)
        const playerNames = playerNamesText
            .split('\n')
            .map(name => name.trim())
            .filter(name => name.length > 0);

        // Validate at least one player
        if (playerNames.length === 0) {
            setError('Please enter at least one player name');
            return;
        }

        // Create tournament
        const newTournament = createTournamentNew(tournamentName.trim(), playerNames);

        // Navigate to tournament detail
        onClose();
        navigate(`/admin/tournament/${newTournament.id}`);
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Create New Tournament</h2>
                    <button onClick={onClose} className="modal-close">×</button>
                </div>

                <form onSubmit={handleSubmit} className="modal-form">
                    <div className="form-group">
                        <label htmlFor="tournamentName">Tournament Name</label>
                        <input
                            id="tournamentName"
                            type="text"
                            value={tournamentName}
                            onChange={(e) => setTournamentName(e.target.value)}
                            placeholder="e.g., Summer League 2025"
                            autoFocus
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="playerNames">
                            Player Names
                            <span className="label-hint">(one per line)</span>
                        </label>
                        <textarea
                            id="playerNames"
                            value={playerNamesText}
                            onChange={(e) => setPlayerNamesText(e.target.value)}
                            placeholder={'John Doe\nJane Smith\nAlex Johnson\n...'}
                            rows={8}
                            required
                        />
                        <p className="form-hint">
                            Enter each player's name on a new line. Codes will be generated automatically.
                        </p>
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <div className="modal-actions">
                        <button type="button" onClick={onClose} className="btn-secondary">
                            Cancel
                        </button>
                        <button type="submit" className="btn-primary">
                            Create Tournament
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
