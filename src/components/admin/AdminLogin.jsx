import React, { useState } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { navigate } from '../shared/Router';
import './AdminLogin.css';

export default function AdminLogin() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAdmin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        const result = await login(password);

        if (result.success) {
            navigate('/admin/dashboard');
        } else {
            setError(result.error || 'Login failed');
            setPassword('');
        }

        setIsLoading(false);
    };

    return (
        <div className="admin-login">
            <div className="admin-login-container">
                <h1>Admin Portal</h1>
                <p className="admin-login-subtitle">MatchDeck Tournament Management</p>

                <form onSubmit={handleSubmit} className="admin-login-form">
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter admin password"
                            required
                            autoFocus
                            disabled={isLoading}
                        />
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <button
                        type="submit"
                        className="btn-primary"
                        disabled={isLoading || !password}
                    >
                        {isLoading ? 'Logging in...' : 'Login'}
                    </button>

                    <p className="admin-login-hint">
                        Default password: <code>admin123</code>
                    </p>
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
