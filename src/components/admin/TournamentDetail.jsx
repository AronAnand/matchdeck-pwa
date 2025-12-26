import React, { useState, useEffect } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { useTournament } from '../../context/TournamentContext';
import { navigate } from '../shared/Router';
import CodeDisplay from '../shared/CodeDisplay';
import AddPlayer from './AddPlayer';
import './TournamentDetail.css';

export default function TournamentDetail({ tournamentId }) {
    const { isSessionValid } = useAdmin();
    const { getTournamentById, deletePlayer, resetPlayerSelection, startNewMatchday, tournaments } = useTournament();
    const [tournament, setTournament] = useState(null);
    const [showAddPlayer, setShowAddPlayer] = useState(false);
    const [sortBy, setSortBy] = useState('name'); // name, status, selection

    // Load tournament and check session
    useEffect(() => {
        if (!isSessionValid()) {
            navigate('/admin');
            return;
        }

        const t = getTournamentById(tournamentId);
        if (!t) {
            alert('Tournament not found');
            navigate('/admin/dashboard');
            return;
        }

        setTournament(t);
    }, [tournamentId, getTournamentById, isSessionValid]);

    // Refresh tournament data when tournaments array changes
    useEffect(() => {
        const t = getTournamentById(tournamentId);
        if (t) {
            console.log('Tournament data refreshed:', t);
            setTournament(t);
        }
    }, [tournamentId, getTournamentById, tournaments]);

    const handleDeletePlayer = (playerId, playerName) => {
        if (window.confirm(`Are you sure you want to eliminate ${playerName}? They will be marked as inactive.`)) {
            deletePlayer(tournamentId, playerId);
        }
    };

    const handleResetPlayer = (playerId, playerName) => {
        if (window.confirm(`Reset ${playerName}'s card selection? A new code will be generated.`)) {
            resetPlayerSelection(tournamentId, playerId);
        }
    };

    const handleStartNewMatchday = async () => {
        const activeCount = tournament.players.filter(p => p.isActive).length;
        if (window.confirm(`Start Matchday ${tournament.currentMatchday + 1}? New codes will be generated for ${activeCount} active players.`)) {
            await startNewMatchday(tournamentId);
        }
    };

    if (!tournament) {
        return <div className="loading">Loading...</div>;
    }

    const activePlayers = tournament.players.filter(p => p.isActive);
    const inactivePlayers = tournament.players.filter(p => !p.isActive);

    const getPlayerMatchdayData = (player) => {
        return player.matchdays.find(m => m.matchdayNumber === tournament.currentMatchday);
    };

    const getPlayerStatus = (player) => {
        const matchdayData = getPlayerMatchdayData(player);
        if (!matchdayData) return 'no-matchday';
        if (matchdayData.selectedCard) return 'selected';
        if (matchdayData.hasLoggedIn) return 'logged-in';
        return 'pending';
    };

    const sortPlayers = (players) => {
        const sorted = [...players];
        if (sortBy === 'name') {
            sorted.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === 'status') {
            sorted.sort((a, b) => {
                const statusA = getPlayerStatus(a);
                const statusB = getPlayerStatus(b);
                return statusA.localeCompare(statusB);
            });
        } else if (sortBy === 'selection') {
            sorted.sort((a, b) => {
                const hasA = getPlayerMatchdayData(a)?.selectedCard ? 1 : 0;
                const hasB = getPlayerMatchdayData(b)?.selectedCard ? 1 : 0;
                return hasB - hasA;
            });
        }
        return sorted;
    };

    const selectionsCount = activePlayers.filter(p => {
        const matchdayData = getPlayerMatchdayData(p);
        return matchdayData && matchdayData.selectedCard;
    }).length;

    return (
        <div className="tournament-detail">
            <div className="admin-header">
                <div className="admin-header-content">
                    <div>
                        <button onClick={() => navigate('/admin/dashboard')} className="btn-back">
                            ← Back to Dashboard
                        </button>
                        <h1>{tournament.name}</h1>
                        <div className="tournament-meta">
                            <span>Matchday {tournament.currentMatchday}</span>
                            <span>•</span>
                            <span>{activePlayers.length} Active Players</span>
                            <span>•</span>
                            <span>{selectionsCount} / {activePlayers.length} Selected</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="admin-content">
                <div className="tournament-actions">
                    <button onClick={() => setShowAddPlayer(true)} className="btn-secondary">
                        + Add Player
                    </button>
                    <button onClick={handleStartNewMatchday} className="btn-primary">
                        Start Matchday {tournament.currentMatchday + 1}
                    </button>
                </div>

                <div className="players-section">
                    <div className="players-header">
                        <h2>Active Players ({activePlayers.length})</h2>
                        <div className="sort-controls">
                            <label>Sort by:</label>
                            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                <option value="name">Name</option>
                                <option value="status">Status</option>
                                <option value="selection">Selection</option>
                            </select>
                        </div>
                    </div>

                    <div className="players-table">
                        <div className="table-header">
                            <div className="col-name">Player Name</div>
                            <div className="col-code">Login Code</div>
                            <div className="col-status">Status</div>
                            <div className="col-card">Card Selected</div>
                            <div className="col-actions">Actions</div>
                        </div>

                        {sortPlayers(activePlayers).map(player => {
                            const matchdayData = getPlayerMatchdayData(player);
                            const status = getPlayerStatus(player);

                            return (
                                <div key={player.id} className={`table-row status-${status}`}>
                                    <div className="col-name">{player.name}</div>
                                    <div className="col-code">
                                        {matchdayData ? (
                                            <CodeDisplay code={matchdayData.code} size="small" />
                                        ) : (
                                            <span className="no-code">No code</span>
                                        )}
                                    </div>
                                    <div className="col-status">
                                        <span className={`status-badge ${status}`}>
                                            {status === 'selected' && 'Selected'}
                                            {status === 'logged-in' && 'Logged In'}
                                            {status === 'pending' && 'Pending'}
                                            {status === 'no-matchday' && 'No Matchday'}
                                        </span>
                                    </div>
                                    <div className="col-card">
                                        {matchdayData?.selectedCard ? (
                                            <div className="card-info">
                                                <span className="card-title">{matchdayData.selectedCard.title}</span>
                                                <span className={`card-rarity ${matchdayData.selectedCard.rarity}`}>
                                                    {matchdayData.selectedCard.rarity}
                                                </span>
                                                <span className="card-description">{matchdayData.selectedCard.text}</span>
                                            </div>
                                        ) : (
                                            <span className="no-selection">—</span>
                                        )}
                                    </div>
                                    <div className="col-actions">
                                        <button
                                            onClick={() => handleResetPlayer(player.id, player.name)}
                                            className="btn-action btn-reset"
                                            title="Reset selection"
                                        >
                                            Reset
                                        </button>
                                        <button
                                            onClick={() => handleDeletePlayer(player.id, player.name)}
                                            className="btn-action btn-delete"
                                            title="Eliminate player"
                                        >
                                            Eliminate
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {inactivePlayers.length > 0 && (
                    <div className="players-section">
                        <h2>Eliminated Players ({inactivePlayers.length})</h2>
                        <div className="players-table">
                            <div className="table-header">
                                <div className="col-name">Player Name</div>
                                <div className="col-status">Status</div>
                            </div>

                            {inactivePlayers.map(player => (
                                <div key={player.id} className="table-row eliminated">
                                    <div className="col-name">{player.name}</div>
                                    <div className="col-status">
                                        <span className="status-badge eliminated">Eliminated</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {showAddPlayer && (
                <AddPlayer tournamentId={tournamentId} onClose={() => setShowAddPlayer(false)} />
            )}
        </div>
    );
}
