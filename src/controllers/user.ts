import { Request, Response } from "express";
import sequelize from "../helpers/mysql.connector";
import { Op } from "sequelize";
import { initModels } from "../models/init-models";
import { getFieldNameToSpanish } from '../helpers/user/get_field_name_to_spanish';
import { errorHandlerUserRegister } from "./errors";
import { createUserToken, passwordMatch } from "./auth";
import { logger } from "../config/logs/log_config";
import { expressLogger } from "../middleware/logs";
import { log } from '../models/log';
import { pushLog } from "../helpers/logs";


// Init Models
const { address, city, document, document_type, role, user } = initModels(sequelize);

/**
 * 
 * @param req request
 * @param res response
 * @returns Returns user by ID 
 */
export async function getUserByID(req: Request, res: Response): Promise<void> {


    try {
        // Get addresses
        const userID = req.params.userID;
        const userQuery = await user.findOne({
            include: [
                {
                    model: document,
                    as: 'user_document_document',
                    include: [
                        {
                            model: document_type,
                            as: 'document_document_type_document_type'
                        }
                    ]
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
                user: userQuery
            });
            return;
        } else {
            res.status(404).json({
                message: 'No existe el usuario actual, por favor intenta de nuevo',
            })
            return;
        }

    } catch (e: any) {
        console.log(e)
        res.status(500).json({
            message: 'Ocurrió un error al cargar información de los usuarios, por favor intenta de nuevo',
        })
    }

}


/**
 * 
 * @param req request
 * @param res response
 * @returns Returns user if the document exists
 */
export async function getUserByDocument(req: Request, res: Response): Promise<void> {


    try {
        // Get addresses
        const documentParam = req.body.document;
        const documentQuery = await document.findOne({
            where: {
                document: documentParam,
                is_active: true,
                deleted_at: null
            }
        });

        if (documentQuery) {

            res.status(200).json({
                document: documentQuery,
            });
            return;
        } else {
            res.status(404).json({
                message: 'No existe el documento, por favor intenta de nuevo',
            })
            return;
        }

    } catch (e: any) {
        console.log(e)
        res.status(500).json({
            message: 'Ocurrió un error al cargar información de los documentos, por favor intenta de nuevo',
        })
    }

}

/**
 * 
 * @param req request
 * @param res response
 * @returns Returns document type by ID
 */



export async function getUserByFieldName(req: Request, res: Response): Promise<void> {


    try {
        const allowedFields = ['email', 'phone']

        const fieldName = req.params.fieldName;
        const fieldValue = req.body[fieldName];

        // If field name is not on allowed fields send 401
        const keys = Object.keys(req.body)
        if (!keys || keys.length == 0 || keys.length > 1 || !allowedFields.includes(fieldName) || keys[0] != fieldName) {
            res.status(401).json({
                message: 'No tienes permiso para hacer eso'
            })
            return;
        }

        const userQuery = await user.findOne({
            include: [
                {
                    model: document,
                    as: 'user_document_document',
                    include: [
                        {
                            model: document_type,
                            as: 'document_document_type_document_type'
                        }
                    ]
                }
            ],
            where: {
                [fieldName]: fieldValue,
                is_active: true,
                deleted_at: null
            },

        });

        const fieldToSpanish = getFieldNameToSpanish(fieldName)
        if (userQuery) {

            res.status(200).json({
                user: userQuery
            });
            return;
        } else {
            res.status(404).json({
                message: 'No se encontró ' + fieldToSpanish + ', por favor intenta de nuevo',
            })
            return;
        }

    } catch (e: any) {
        console.log(e)
        res.status(500).json({
            message: 'Ocurrió un error al cargar información, por favor intenta de nuevo',
        })
    }

}


/**
 * 
 * @param req request
 * @param res response
 * @returns Returns user if document type is NIT, and exists document number and match name with razon social
 */
export async function getUserByRazonSocial(req: Request, res: Response): Promise<void> {


    try {
        const documentNumber = req.body.document;
        const razonSocial = req.body.razonSocial;

        if (!documentNumber || !razonSocial) {
            res.status(400).json({
                message: 'Consulta no válida'
            })
            return;
        }

        const userQuery = await user.findOne({
            include: [
                {
                    model: document,
                    as: 'user_document_document',
                    include: [
                        {
                            model: document_type,
                            as: 'document_document_type_document_type',
                            where: {
                                document_type: 'NIT',
                                is_active: true,
                                deleted_at: null
                            }
                        },

                    ],
                    where: {
                        document: documentNumber,
                        is_active: true,
                        deleted_at: null
                    }
                },
            ],
            where: {
                name: razonSocial,
                is_active: true,
                deleted_at: null
            },

        });

        if (userQuery) {

            res.status(200).json({
                user: userQuery
            });
            return;
        } else {
            res.status(404).json({
                message: 'No se encontró el usuario por favor intenta de nuevo',
            })
            return;
        }

    } catch (e: any) {
        console.log(e)
        res.status(500).json({
            message: 'Ocurrió un error al cargar información del usuario, por favor intenta de nuevo',
        })
    }

}


/**
 * 
 * @param req request
 * @param res response
 * @returns Register new user
 */

export async function registerUser(req: Request, res: Response): Promise<void> {

    try {

        // 1. REGISTER DOCUMENT IF ERROR DELETE
        // 2. GET CONSULTA EXTERNA OR DEFAULT ROLE
        // 3. REGISTER USER IF ERROR DELETE
        // 4. REGISTER ADDRESS IF ERROR DELETE

        const documentData = req.body.document;
        const addressData = req.body.address;
        const userData = req.body.user;
        if (!documentData || !addressData || !userData) {
            res.status(400).json({
                message: 'Consulta no válida'
            })
            return;
        }

        // 1. REGISTER DOCUMENT IF ERROR DELETE
        try {
            const documentQuery = await document.create(documentData);
            // 2. GET CONSULTA EXTERNA OR DEFAULT ROLE
            try {
                const consultaExternaRole = await role.findOne({
                    where: {
                        role: 'CONSULTA EXTERNA',
                        is_active: true,
                        deleted_at: null
                    }
                });

                if (!consultaExternaRole) {
                    throw new Error('No existe el rol de consulta externa')
                }

                // 3. REGISTER USER IF ERROR DELETE
                try {
                    const userQuery = await user.create({
                        ...userData,
                        role_user: consultaExternaRole.id_role,
                        document_document: documentQuery.id_document
                    });
                    // 4. REGISTER ADDRESS IF ERROR DELETE
                    try {
                        const getIDDefaultCity = await city.findOne({
                            where: {
                                city: 'BOGOTA',
                                is_active: true,
                                deleted_at: null
                            }
                        });
                        const addressQuery = await address.create({
                            ...addressData,
                            address_city: getIDDefaultCity.id_city,
                            address_user: userQuery.id_user
                        });
                        if (addressQuery) {
                            res.status(201).json({
                                message: 'Usuario registrado correctamente',
                                user: userQuery
                            });
                            return;
                        }
                    } catch (error) {
                        await userQuery.destroy();
                        await documentQuery.destroy();
                        errorHandlerUserRegister(error, res);
                    }
                } catch (error) {
                    await documentQuery.destroy();
                    errorHandlerUserRegister(error, res);
                }


            } catch (error) {
                await documentQuery.destroy();
                res.status(500).json({
                    message: 'Ocurrió un error al registrar el rol, por favor intenta de nuevo',
                })
                return;
            }


        } catch (error) {
            errorHandlerUserRegister(error, res);
            return;
        }



    } catch (error) {
        const response = res.status(500).json({
            message: 'Ocurrió un error al registrar el usuario, por favor intenta de nuevo',
        })
        return;

    }

}

/**
 * @param req request
 * @param res response
 * @returns Send 200 and token if login is correct
 * Can login with email or phone
 * Send 401 if password is incorrect
 */

export async function loginUser(req: Request, res: Response): Promise<void> {

    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
        res.status(400).json({
            message: 'Consulta no válida'
        })
        return;
    }

    try {

        const userQuery = await user.findOne({
            include: [
                {
                    model: document,
                    as: 'user_document_document',
                    where: {
                        is_active: true,
                        deleted_at: null
                    }
                }
            ],
            where: {
                [Op.or]: [
                    { email: username },
                    { phone: username },
                    {
                        '$user_document_document.document$': username
                    }
                ],
                is_active: true,
                deleted_at: null
            }
        });

        pushLog('LOGIN USER: ' + JSON.stringify(userQuery))

        if (!userQuery) {
            res.status(404).json({
                message: 'No existe el usuario, por favor intenta de nuevo',
            })
            return;
        } else {
            // Compare password
            const passwordMatches = await passwordMatch(password, userQuery.password);
            // TODO: quitar esta validación en producción
            if (!passwordMatches) {
                if (userQuery.password !== password) {
                    res.status(401).json({
                        message: 'Contraseña incorrecta, por favor intenta de nuevo',
                    })
                } else {
                    const token = await createUserToken(userQuery.id_user);
                    res.status(200).json({
                        user: userQuery,
                        token
                    })
                }
            } else {
                const token = await createUserToken(userQuery.id_user);
                res.status(200).json({
                    user: userQuery,
                    token
                })
            }
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Ocurrió un error al cargar información del usuario, por favor intenta de nuevo',
        })
        return;
    }


}

/**
 * 
 * @param req request
 * @param res response
 * @returns Returns user profile
 */

export async function getUserProfile(req: Request, res: Response): Promise<void> {

    try {


        const userQuery = await user.findOne({
            include: [
                {
                    model: document,
                    as: 'user_document_document',
                    include: [
                        {
                            model: document_type,
                            as: 'document_document_type_document_type'
                        }
                    ]
                }
            ],
            where: {
                id_user: (req as any).id_user,
                is_active: true,
                deleted_at: null
            }
        });

        if (userQuery) {

            res.status(200).json({
                user: userQuery
            });
            return;
        } else {
            res.status(404).json({
                message: 'No existe el usuario actual, por favor intenta de nuevo',
            })
            return;
        }

    } catch (e: any) {
        console.log(e)
        res.status(500).json({
            message: 'Ocurrió un error al cargar información del usuario, por favor intenta de nuevo',
        })
    }
}


