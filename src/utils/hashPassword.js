// Simple password hashing utilities using Web Crypto API

/**
 * Hash a password using SHA-256
 * @param {string} password - Plain text password
 * @returns {Promise<string>} - Hashed password as hex string
 */
export async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

/**
 * Verify a password against a hash
 * @param {string} password - Plain text password to verify
 * @param {string} hash - Stored password hash
 * @returns {Promise<boolean>} - True if password matches hash
 */
export async function verifyPassword(password, hash) {
  const passwordHash = await hashPassword(password);
  return passwordHash === hash;
}

/**
 * Get default admin password hash
 * This is pre-computed hash of "3idiots2025"
 * @returns {string} - Default password hash
 */
export function getDefaultPasswordHash() {
  // Pre-computed SHA-256 hash of "3idiots2025"
  return 'ed12b85eae4e2ea99226f8192e3d533629b790cb591c10246f8730b17cb8cdd2';
}
