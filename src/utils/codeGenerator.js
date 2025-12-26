// Login code generation utilities

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMBERS = '0123456789';

/**
 * Generate a random login code in format XXXX-YYYY
 * @returns {string} - Login code (e.g., "FIRE-2847")
 */
export function generateLoginCode() {
  // Generate 4 random uppercase letters
  const letterPart = Array(4)
    .fill(0)
    .map(() => LETTERS[Math.floor(Math.random() * LETTERS.length)])
    .join('');

  // Generate 4 random digits
  const numberPart = Array(4)
    .fill(0)
    .map(() => NUMBERS[Math.floor(Math.random() * NUMBERS.length)])
    .join('');

  return `${letterPart}-${numberPart}`;
}

/**
 * Generate a unique login code that doesn't exist in the provided list
 * @param {Array<string>} existingCodes - Array of existing codes to check against
 * @param {number} maxAttempts - Maximum number of attempts before giving up
 * @returns {string} - Unique login code
 * @throws {Error} - If unable to generate unique code after maxAttempts
 */
export function generateUniqueCode(existingCodes = [], maxAttempts = 100) {
  let code;
  let attempts = 0;

  do {
    code = generateLoginCode();
    attempts++;

    if (attempts >= maxAttempts) {
      throw new Error('Unable to generate unique code after maximum attempts');
    }
  } while (existingCodes.includes(code));

  return code;
}

/**
 * Validate code format (XXXX-YYYY)
 * @param {string} code - Code to validate
 * @returns {boolean} - True if valid format
 */
export function isValidCodeFormat(code) {
  if (typeof code !== 'string') return false;

  // Check format: 4 letters, dash, 4 numbers
  const codeRegex = /^[A-Z]{4}-[0-9]{4}$/;
  return codeRegex.test(code);
}

/**
 * Format code input as user types (auto-insert dash)
 * @param {string} input - Raw user input
 * @returns {string} - Formatted code
 */
export function formatCodeInput(input) {
  // Remove any non-alphanumeric characters except dash
  let cleaned = input.toUpperCase().replace(/[^A-Z0-9]/g, '');

  // Limit to 8 characters (4 letters + 4 numbers)
  cleaned = cleaned.slice(0, 8);

  // Insert dash after 4th character
  if (cleaned.length > 4) {
    return cleaned.slice(0, 4) + '-' + cleaned.slice(4);
  }

  return cleaned;
}
