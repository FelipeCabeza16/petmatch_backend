import { Request, Response } from "express";
import sequelize from "../helpers/mysql.connector";
import { initModels } from "../models/init-models";

// Init Models
const {address, user} = initModels(sequelize);

/**
 * 
 * @param req request
 * @param res response
 * @returns Returns all user addresses
 */
export async function getAllUserAddresses(req: Request, res: Response): Promise<void> {


    try {
        // Get addresses
        const userID = req.params.userID;
        const addresses = await address.findAll({
            include: [
                {
                    model: user,
                    as: 'address_user_user'
                }
            ],
            where: {
                user_address: userID,
                is_active: true,
                deleted_at: null
            }
        });

        if (addresses && address.length > 0) {

            res.status(200).json({
                addresses
            });
            return;
        } else {
            res.status(404).json({
                message: 'No existen direcciones para el usuario actual, por favor intenta de nuevo',
            })
            return;
        }

        } catch (e: any) {
            console.log(e)
            res.status(500).json({
                message: 'Ocurrió un error al cargar información de las direcciones, por favor intenta de nuevo',
            })
        }

}

/**
 * 
 * @param req request
 * @param res response
 * @returns Returns current user address
 */
export async function getCurrentUserAddress(req: Request, res: Response): Promise<void> {


    try {
        // Get address
        const userID = req.params.userID;
        const currentAddress = await address.findOne({
            include: [
                {
                    model: user,
                    as: 'address_user_user'
                }
            ],
            where: {
                user_address: userID,
                // is_actual_address: true,
                is_active: true,
                deleted_at: null
            }
        });

        if (currentAddress) {

            res.status(200).json({
                address: currentAddress
            });
            return;
        } else {
            res.status(404).json({
                message: 'El usuario actual no cuenta con direecion, por favor intenta de nuevo',
            })
            return;
        }

        } catch (e: any) {
            res.status(500).json({
                message: 'Ocurrió un error al cargar información de las direcciones, por favor intenta de nuevo',
            })
        }

}


/**
 * 
 * @param req request
 * @param res response
 * @returns Returns address by id
 */
export async function getAllAddressByID(req: Request, res: Response): Promise<void> {


    try {
        // Get address
        const addressID = req.params.addressID;
        const currentAddress = await address.findOne({
            include: [
                {
                    model: user,
                    as: 'address_user_user'
                }
            ],
            where: {
                id_address: addressID,
                is_active: true,
                deleted_at: null
            }
        });

        if (currentAddress) {

            res.status(200).json({
                address: currentAddress
            });
            return;
        } else {
            res.status(404).json({
                message: 'No se encontró la dirección, por favor intenta de nuevo',
            })
            return;
        }

        } catch (e: any) {
            res.status(500).json({
                message: 'Ocurrió un error al cargar información de las direcciones, por favor intenta de nuevo',
            })
        }

}