import jwt from 'jsonwebtoken'
import { user, auth } from '../../models/init-models'
import { NextFunction, Request, Response } from 'express'
import { CustomRequest } from './interfaces';

export const authUser = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env['JWT_SECRET'])
        const id_user = (decoded as any).id_user
        const userQuery = await user.findOne({
            where: {
                id_user,

            }
        })
        const tokenQuery = await auth.findOne({
            where: {
                token: token,
                token_user: id_user
            }
        })
        if (!userQuery || !tokenQuery) {
            throw new Error()
        }


        (req as unknown as CustomRequest).token = token;
        (req as unknown as CustomRequest).id_user = id_user;
        (req as unknown as CustomRequest).role_user = userQuery.role_user;
        next()
    } catch (e) {
        res.status(401).send({ message: 'Vuelve a iniciar sesión.' })
    }
}
