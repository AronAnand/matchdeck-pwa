// LocalStorage utilities for MatchDeck Tournament System

const TOURNAMENTS_KEY = 'matchdeck_tournaments';
const ADMIN_SESSION_KEY = 'matchdeck_admin_session';
const ACTIVE_TOURNAMENT_KEY = 'matchdeck_active_tournament_id';

/**
 * Save tournaments array to localStorage
 * @param {Array} tournaments - Array of tournament objects
 * @returns {boolean} - Success status
 */
export function saveTournaments(tournaments) {
  try {
    localStorage.setItem(TOURNAMENTS_KEY, JSON.stringify(tournaments));
    return true;
  } catch (error) {
    console.error('Failed to save tournaments:', error);
    if (error.name === 'QuotaExceededError') {
      alert('Storage limit reached. Please delete old tournaments.');
    }
    return false;
  }
}

/**
 * Load tournaments array from localStorage
 * @returns {Array} - Array of tournament objects (empty if none exist)
 */
export function loadTournaments() {
  try {
    const data = localStorage.getItem(TOURNAMENTS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Failed to load tournaments:', error);
    return [];
  }
}

/**
 * Save admin session to localStorage
 * @param {Object} session - Session object with isAuthenticated and expiresAt
 * @returns {boolean} - Success status
 */
export function saveAdminSession(session) {
  try {
    localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(session));
    return true;
  } catch (error) {
    console.error('Failed to save admin session:', error);
    return false;
  }
}

/**
 * Load admin session from localStorage
 * @returns {Object|null} - Session object or null if none exists
 */
export function loadAdminSession() {
  try {
    const data = localStorage.getItem(ADMIN_SESSION_KEY);
    if (!data) return null;

    const session = JSON.parse(data);

    // Check if session has expired
    if (session.expiresAt && Date.now() > session.expiresAt) {
      clearAdminSession();
      return null;
    }

    return session;
  } catch (error) {
    console.error('Failed to load admin session:', error);
    return null;
  }
}

/**
 * Clear admin session from localStorage
 */
export function clearAdminSession() {
  try {
    localStorage.removeItem(ADMIN_SESSION_KEY);
  } catch (error) {
    console.error('Failed to clear admin session:', error);
  }
}

/**
 * Save active tournament ID to localStorage
 * @param {string} tournamentId - Tournament ID
 * @returns {boolean} - Success status
 */
export function saveActiveTournamentId(tournamentId) {
  try {
    localStorage.setItem(ACTIVE_TOURNAMENT_KEY, tournamentId);
    return true;
  } catch (error) {
    console.error('Failed to save active tournament ID:', error);
    return false;
  }
}

/**
 * Load active tournament ID from localStorage
 * @returns {string|null} - Tournament ID or null if none exists
 */
export function loadActiveTournamentId() {
  try {
    return localStorage.getItem(ACTIVE_TOURNAMENT_KEY);
  } catch (error) {
    console.error('Failed to load active tournament ID:', error);
    return null;
  }
}

/**
 * Save admin password hash to localStorage
 * @param {string} passwordHash - Hashed password
 * @returns {boolean} - Success status
 */
export function saveAdminPasswordHash(passwordHash) {
  try {
    localStorage.setItem('matchdeck_admin_password', passwordHash);
    return true;
  } catch (error) {
    console.error('Failed to save admin password:', error);
    return false;
  }
}

/**
 * Load admin password hash from localStorage
 * @returns {string|null} - Password hash or null if none exists
 */
export function loadAdminPasswordHash() {
  try {
    return localStorage.getItem('matchdeck_admin_password');
  } catch (error) {
    console.error('Failed to load admin password:', error);
    return null;
  }
}
