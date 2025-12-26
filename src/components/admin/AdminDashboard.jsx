import React, { useState, useEffect } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { useTournament } from '../../context/TournamentContext';
import { navigate } from '../shared/Router';
import CreateTournament from './CreateTournament';
import './AdminDashboard.css';

export default function AdminDashboard() {
    const { isSessionValid, logout } = useAdmin();
    const { tournaments, deleteTournament } = useTournament();
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [tournamentToDelete, setTournamentToDelete] = useState(null);

    // Check session validity
    useEffect(() => {
        if (!isSessionValid()) {
            navigate('/admin');
        }
    }, [isSessionValid]);

    const handleDeleteTournament = (tournamentId) => {
        if (window.confirm('Are you sure you want to delete this tournament? This action cannot be undone.')) {
            deleteTournament(tournamentId);
            setTournamentToDelete(null);
        }
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const getActivePlayerCount = (tournament) => {
        return tournament.players.filter(p => p.isActive).length;
    };

    const getSelectionsCount = (tournament) => {
        return tournament.players.filter(p => {
            if (!p.isActive) return false;
            const currentMatchday = p.matchdays.find(m => m.matchdayNumber === tournament.currentMatchday);
            return currentMatchday && currentMatchday.selectedCard !== null;
        }).length;
    };

    return (
        <div className="admin-dashboard">
            <div className="admin-header">
                <div className="admin-header-content">
                    <h1>Tournament Dashboard</h1>
                    <div className="admin-header-actions">
                        <button onClick={() => navigate('/')} className="btn-secondary">
                            Home
                        </button>
                        <button onClick={handleLogout} className="btn-secondary">
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            <div className="admin-content">
                <div className="dashboard-actions">
                    <button onClick={() => setShowCreateModal(true)} className="btn-create-tournament">
                        + Create New Tournament
                    </button>
                </div>

                {tournaments.length === 0 ? (
                    <div className="empty-state">
                        <h2>No tournaments yet</h2>
                        <p>Create your first tournament to get started!</p>
                    </div>
                ) : (
                    <div className="tournaments-grid">
                        {tournaments.map(tournament => (
                            <div key={tournament.id} className="tournament-card">
                                <div className="tournament-card-header">
                                    <h3>{tournament.name}</h3>
                                    <span className={`status-badge ${tournament.status}`}>
                                        {tournament.status}
                                    </span>
                                </div>

                                <div className="tournament-card-body">
                                    <div className="tournament-stat">
                                        <span className="stat-label">Matchday</span>
                                        <span className="stat-value">{tournament.currentMatchday}</span>
                                    </div>

                                    <div className="tournament-stat">
                                        <span className="stat-label">Active Players</span>
                                        <span className="stat-value">{getActivePlayerCount(tournament)}</span>
                                    </div>

                                    <div className="tournament-stat">
                                        <span className="stat-label">Card Selections</span>
                                        <span className="stat-value">
                                            {getSelectionsCount(tournament)} / {getActivePlayerCount(tournament)}
                                        </span>
                                    </div>

                                    <div className="tournament-stat">
                                        <span className="stat-label">Created</span>
                                        <span className="stat-value">
                                            {new Date(tournament.createdAt).toLocaleDateString()}
                                        </span>
                                    </div>
                                </div>

                                <div className="tournament-card-actions">
                                    <button
                                        onClick={() => navigate(`/admin/tournament/${tournament.id}`)}
                                        className="btn-primary"
                                    >
                                        Manage
                                    </button>
                                    <button
                                        onClick={() => handleDeleteTournament(tournament.id)}
                                        className="btn-danger"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {showCreateModal && (
                <CreateTournament onClose={() => setShowCreateModal(false)} />
            )}
        </div>
    );
}
