import { Request, Response } from "express";
import sequelize from "../helpers/mysql.connector";
import { initModels } from "../models/init-models";

// Init Models
const {role, user} = initModels(sequelize);



/**
 * 
 * @param req request
 * @param res response
 * @returns Returns role of current user
 */
export async function getUserRole(req: Request, res: Response): Promise<void> {


    try {
        // Get user role
        const userID = req.params.userID;
        const userQuery = await user.findOne({
            include: [
                {
                    model: role,
                    as: 'role_user_role'
                }
            ],
            where: {
                id_user: userID,
                is_active: true,
                deleted_at: null
            }
        });

        if (userQuery) {

            res.status(200).json({
                role: userQuery.role_user_role,
                userID: userQuery.id_user
            });
            return;
        } else {
            res.status(404).json({
                message: 'No existe role para el usuario actual, por favor intenta de nuevo',
            })
            return;
        }

        } catch (e: any) {
            console.log(e)
            res.status(500).json({
                message: 'Ocurrió un error al cargar información de los roles, por favor intenta de nuevo',
            })
        }

}

/**
 * 
 * @param req request
 * @param res response
 * @returns Get Role by ID
 * 
 */


export async function getRoleByID(req: Request, res: Response): Promise<void> {


    try {
        const roleID = req.params.roleID;
        const roleQuery = await role.findOne({

            where: {
                id_role: roleID,
                is_active: true,
                deleted_at: null
            }
        });

        if (roleQuery) {

            res.status(200).json({
                role: roleQuery
            });
            return;
        } else {
            res.status(404).json({
                message: 'No existe el rol, por favor intenta de nuevo',
            })
            return;
        }

        } catch (e: any) {
            res.status(500).json({
                message: 'Ocurrió un error al cargar información del rol, por favor intenta de nuevo',
            })
        }

}


/**
 * 
 * @param req request
 * @param res response
 * @returns Get Role by role name
 * 
 */


export async function getRoleByName(req: Request, res: Response): Promise<void> {


    try {
        const roleName = req.params.roleName;
        const roleQuery = await role.findOne({

            where: {
                role: roleName,
                is_active: true,
                deleted_at: null
            }
        });

        if (roleQuery) {

            res.status(200).json({
                role: roleQuery
            });
            return;
        } else {
            res.status(404).json({
                message: 'No existe el rol, por favor intenta de nuevo',
            })
            return;
        }

        } catch (e: any) {
            res.status(500).json({
                message: 'Ocurrió un error al cargar información del rol, por favor intenta de nuevo',
            })
        }

}