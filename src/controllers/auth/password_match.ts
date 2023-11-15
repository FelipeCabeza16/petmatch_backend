import bcrypt from 'bcrypt';

/**
 * @param {string} passwordReceived
 * @param {string} passwordDB
 */

export const passwordMatch = async(passwordReceived: string, passwordDB: string) => {
    const result = await bcrypt.compare(passwordReceived, passwordDB);
    return result;
}