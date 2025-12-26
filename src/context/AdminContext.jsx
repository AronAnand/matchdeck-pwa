import React, { createContext, useState, useContext, useEffect } from 'react';
import {
    saveAdminSession,
    loadAdminSession,
    clearAdminSession,
    saveAdminPasswordHash,
    loadAdminPasswordHash
} from '../utils/storage';
import { hashPassword, verifyPassword, getDefaultPasswordHash } from '../utils/hashPassword';

const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [sessionExpiresAt, setSessionExpiresAt] = useState(null);

    // Session duration: 24 hours
    const SESSION_DURATION = 24 * 60 * 60 * 1000;

    // Load admin session on mount
    useEffect(() => {
        const session = loadAdminSession();
        if (session && session.isAuthenticated) {
            setIsAuthenticated(true);
            setSessionExpiresAt(session.expiresAt);
        }

        // Initialize default password if none exists
        const existingHash = loadAdminPasswordHash();
        if (!existingHash) {
            saveAdminPasswordHash(getDefaultPasswordHash());
        }
    }, []);

    /**
     * Login with password
     */
    const login = async (password) => {
        const storedHash = loadAdminPasswordHash() || getDefaultPasswordHash();
        const isValid = await verifyPassword(password, storedHash);

        if (isValid) {
            const expiresAt = Date.now() + SESSION_DURATION;
            const session = {
                isAuthenticated: true,
                expiresAt
            };

            saveAdminSession(session);
            setIsAuthenticated(true);
            setSessionExpiresAt(expiresAt);

            return { success: true };
        }

        return { success: false, error: 'Invalid password' };
    };

    /**
     * Logout and clear session
     */
    const logout = () => {
        clearAdminSession();
        setIsAuthenticated(false);
        setSessionExpiresAt(null);
    };

    /**
     * Change admin password
     */
    const changePassword = async (currentPassword, newPassword) => {
        const storedHash = loadAdminPasswordHash() || getDefaultPasswordHash();
        const isValid = await verifyPassword(currentPassword, storedHash);

        if (!isValid) {
            return { success: false, error: 'Current password is incorrect' };
        }

        const newHash = await hashPassword(newPassword);
        saveAdminPasswordHash(newHash);

        return { success: true };
    };

    /**
     * Check if session is still valid
     */
    const isSessionValid = () => {
        if (!isAuthenticated) return false;
        if (!sessionExpiresAt) return false;
        if (Date.now() > sessionExpiresAt) {
            logout();
            return false;
        }
        return true;
    };

    return (
        <AdminContext.Provider value={{
            isAuthenticated,
            sessionExpiresAt,
            login,
            logout,
            changePassword,
            isSessionValid
        }}>
            {children}
        </AdminContext.Provider>
    );
};
