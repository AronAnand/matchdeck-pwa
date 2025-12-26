// Firestore utilities for tournament data
import {
    collection,
    doc,
    setDoc,
    getDoc,
    getDocs,
    deleteDoc,
    onSnapshot
} from 'firebase/firestore';
import { db } from '../firebase/config';

const TOURNAMENTS_COLLECTION = 'tournaments';

/**
 * Save a tournament to Firestore
 * @param {Object} tournament - Tournament object
 */
export async function saveTournament(tournament) {
    try {
        await setDoc(doc(db, TOURNAMENTS_COLLECTION, tournament.id), tournament);
        console.log('Tournament saved to Firestore:', tournament.id);
        return true;
    } catch (error) {
        console.error('Error saving tournament:', error);
        return false;
    }
}

/**
 * Load all tournaments from Firestore
 * @returns {Promise<Array>} - Array of tournament objects
 */
export async function loadTournamentsFromFirestore() {
    try {
        const querySnapshot = await getDocs(collection(db, TOURNAMENTS_COLLECTION));
        const tournaments = [];
        querySnapshot.forEach((doc) => {
            tournaments.push(doc.data());
        });
        console.log('Loaded tournaments from Firestore:', tournaments.length);
        return tournaments;
    } catch (error) {
        console.error('Error loading tournaments:', error);
        return [];
    }
}

/**
 * Get a single tournament by ID
 * @param {string} tournamentId - Tournament ID
 * @returns {Promise<Object|null>} - Tournament object or null
 */
export async function getTournament(tournamentId) {
    try {
        const docRef = doc(db, TOURNAMENTS_COLLECTION, tournamentId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            console.log('No such tournament:', tournamentId);
            return null;
        }
    } catch (error) {
        console.error('Error getting tournament:', error);
        return null;
    }
}

/**
 * Delete a tournament from Firestore
 * @param {string} tournamentId - Tournament ID
 */
export async function deleteTournamentFromFirestore(tournamentId) {
    try {
        await deleteDoc(doc(db, TOURNAMENTS_COLLECTION, tournamentId));
        console.log('Tournament deleted from Firestore:', tournamentId);
        return true;
    } catch (error) {
        console.error('Error deleting tournament:', error);
        return false;
    }
}

/**
 * Subscribe to real-time updates for all tournaments
 * @param {Function} callback - Called when tournaments change
 * @returns {Function} - Unsubscribe function
 */
export function subscribeToTournaments(callback) {
    const unsubscribe = onSnapshot(
        collection(db, TOURNAMENTS_COLLECTION),
        (querySnapshot) => {
            const tournaments = [];
            querySnapshot.forEach((doc) => {
                tournaments.push(doc.data());
            });
            console.log('Tournaments updated in real-time:', tournaments.length);
            callback(tournaments);
        },
        (error) => {
            console.error('Error in real-time listener:', error);
        }
    );

    return unsubscribe;
}

/**
 * Subscribe to real-time updates for a single tournament
 * @param {string} tournamentId - Tournament ID
 * @param {Function} callback - Called when tournament changes
 * @returns {Function} - Unsubscribe function
 */
export function subscribeToTournament(tournamentId, callback) {
    const unsubscribe = onSnapshot(
        doc(db, TOURNAMENTS_COLLECTION, tournamentId),
        (doc) => {
            if (doc.exists()) {
                console.log('Tournament updated:', tournamentId);
                callback(doc.data());
            } else {
                console.log('Tournament deleted:', tournamentId);
                callback(null);
            }
        },
        (error) => {
            console.error('Error in tournament listener:', error);
        }
    );

    return unsubscribe;
}
