import { Response } from "express";
import { getFieldNameToSpanish } from "../../helpers/user";

/**
 * @param err error
 * @param res response
 * @returns Returns error message depending on error type
 */

export const errorHandlerUserRegister = (err: any, res: Response): Response => {

    console.log(err)
    if (err) {
        if (err.name && err.name === 'SequelizeUniqueConstraintError') {
            const pathName = getFieldNameToSpanish(err.errors[0].path);
            return res.status(400).json({
                message: pathName + ' ya se encuentra registrado, por favor intenta de nuevo'
            })
        } else if (err.name && err.name === 'SequelizeValidationError') {
            const pathName = getFieldNameToSpanish(err.errors[0].path);
            return res.status(400).json({
                message: pathName + ' no es válido, por favor intenta de nuevo'
            })
        } else {
            return res.status(400).json({
                message: 'Error al registrar el usuario, por favor intenta de nuevo'
            })
    
        }    

    }

}