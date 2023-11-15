import jwt from 'jsonwebtoken';
import { auth } from '../../models/auth';

/**
 * 
 * @param id_user 
 * @returns string | undefined depending on the result of generate token
 */

export const createUserToken = async(id_user: number): Promise<string> | undefined => {
    try {
        const token = jwt.sign({ id_user }, process.env['JWT_SECRET'], {
            expiresIn: '2 days',
        });
        // Write on the database the token
        const authQuery = await auth.create({
            token: token,
            token_user: id_user,
        });

        if (!authQuery || !token) {
            throw new Error();
        }

        return token;

    } catch (error) {
        return undefined;
    }

}