import { Request, Response } from "express";
import sequelize from "../helpers/mysql.connector";
import { initModels } from "../models/init-models";
import { CustomRequest } from "../middleware/auth/interfaces";

// Init Models
const {role, operation, modulo, permission, user} = initModels(sequelize);



/**
 * 
 * @param req request
 * @param res response
 * @returns Regresa los módulos con los permisos al que un rol tiene acceso
 */
export async function getOperationsByRoleID(req: Request, res: Response): Promise<void> {


    try {
        // Get user role
        const roleID = req.params.roleID;
        const operationQuery = await operation.findAll({
            include: [
                {
                    model: role,
                    as: 'role_operation_role'
                },
                {
                    model: modulo,
                    as: 'modulo_operation_modulo'
                },
                {
                    model: permission,
                    as: 'permission_operation_permission'
                }
            ],
            where: {
                role_operation: roleID,
                is_active: true,
            }
        });

        if (operationQuery) {

            res.status(200).json({
                operations: operationQuery,
                roleID
            });
            return;
        } else {
            res.status(404).json({
                message: 'No existen operaciones para el rol actual, por favor intenta de nuevo',
            })
            return;
        }

        } catch (e: any) {
            console.log(e)
            res.status(500).json({
                message: 'Ocurrió un error al cargar las operaciones de los permisos, por favor intenta de nuevo',
            })
        }

}




/**
 * 
 * @param req request
 * @param res response
 * @returns Regresa los módulos con los modulos al que un usuario tiene acceso
 */
export async function getModulesByUserID(req: Request, res: Response): Promise<void> {


    try {
        const userID = (req as unknown as CustomRequest).id_user;
        // Get user 
        try {
            const userQuery = await user.findOne({
                where: {
                    id_user: userID
                }
            });

            const roleID = userQuery.role_user;
            
            if (!roleID) {
                res.status(404).json({
                    message: 'No existe el rol del usuario, por favor intenta de nuevo',
                })
                return;
            }
                
        


        const operationQuery = await operation.findAll({
            include: [
                {
                    model: role,
                    as: 'operation_role_role'
                },
                {
                    model: modulo,
                    as: 'modulo_operation_modulo'
                },
            ],
            
            where: {
                role_operation: roleID,
                is_active: true,
            }           
        });

        if (operationQuery) {

            const modules = operationQuery.map((operation) => {
                return operation.modulo_operation_modulo;
            });


            // Remove duplicates
            const uniqueModules = Array.from(new Set(modules.map((a: any) => a.id_modulo)))
                .map(id_modulo => {
                    return modules.find((a: any) => a.id_modulo === id_modulo)
                })

            res.status(200).json({
                modulos: uniqueModules,
                roleID
            });
            return;
        } else {
            res.status(404).json({
                message: 'No existen operaciones para el rol actual, por favor intenta de nuevo',
            })
            return;
        } 
    }
    catch (e: any) {
        console.log(e)
        res.status(500).json({
            message: 'Ocurrió un error al cargar la información del usuario, por favor intenta de nuevo',
        })
    }

        } catch (e: any) {
            console.log(e)
            res.status(500).json({
                message: 'Ocurrió un error al cargar las operaciones de los permisos, por favor intenta de nuevo',
            })
        }

}




/**
 * 
 * @param req request
 * @param res response
 * @returns Regresa los permisos de cierto modulo obtenido por ID para el usuario
 */
export async function getPermissionsOfModuleByModuleID(req: Request, res: Response): Promise<void> {


    try {
        const userID = (req as unknown as CustomRequest).id_user;
        const moduleID = req.params.moduleID;
        // Get user 
        try {
            const userQuery = await user.findOne({
                where: {
                    id_user: userID
                }
            });

            const roleID = userQuery.role_user;
            
            if (!roleID) {
                res.status(404).json({
                    message: 'No existe el rol del usuario, por favor intenta de nuevo',
                })
                return;
            }
                
        


        const operationQuery = await operation.findAll({
            include: [
                {
                    model: role,
                    as: 'role_operation_role'
                },
                {
                    model: permission,
                    as: 'permission_operation_permission'
                },
                {
                    model: modulo,
                    as: 'modulo_operation_modulo'
                },
            ],
            
            where: {
                modulo_operation: moduleID,
                role_operation: roleID,
                is_active: true,
            }           
        });

        if (operationQuery) {

            const permissions = operationQuery.map((operation) => {
                return operation.permission_operation_permission;
            })


            // Remove duplicates
            const uniquePermissions = Array.from(new Set(permissions.map((a: any) => a.id_permission)))
                .map(id_permission => {
                    return permissions.find((a: any) => a.id_permission === id_permission)
                })

            res.status(200).json({
                permissions: uniquePermissions,
                roleID
            });
            return;
        } else {
            res.status(500).json({
                message: 'No existen permisos para el rol actual, por favor intenta de nuevo',
            })
            return;
        } 
    }
    catch (e: any) {
        console.log(e)
        res.status(500).json({
            message: 'Ocurrió un error al cargar la información del usuario, por favor intenta de nuevo',
        })
    }

        } catch (e: any) {
            console.log(e)
            res.status(500).json({
                message: 'Ocurrió un error al cargar las operaciones de los permisos, por favor intenta de nuevo',
            })
        }

}

