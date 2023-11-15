import { Request, Response, NextFunction } from "express";
import { CustomRequest } from "./interfaces";
import jwt from 'jsonwebtoken';
import { user } from "../../models/init-models";
import { createUserToken } from "../../controllers/auth";

export const revalidateToken = async (req: Request, res: Response, next: NextFunction) => {

    try {

        let token = (req as unknown as CustomRequest).token as string;

        if (!token) {
            res.status(401).send({ message: 'Vuelve a iniciar sesión.' });
            return;
        }

        const decoded = jwt.verify(token, process.env['JWT_SECRET'])
        const id_user = (decoded as any).id_user
        const userQuery = await user.findOne({
            where: {
                id_user,

            }
        })

        if (!userQuery) {
            throw new Error()
        }


        // Create token
        token = await createUserToken(userQuery.id_user);
        // ASign token to request
        if (!token) {            
            console.log('Error en la sesión, por favor revisa tu conexión e intenta de nuevo.');
            res.status(500).send({ message: 'Error en la sesión, por favor revisa tu conexión e intenta de nuevo.' });
        }
        (req as unknown as CustomRequest).token = token;

        next();

    }

    catch (error) {
        res.status(401).send({ message: 'Vuelve a iniciar sesión.' })
    }
}