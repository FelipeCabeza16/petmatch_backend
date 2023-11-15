import { Request, Response } from "express";
import sequelize from "../helpers/mysql.connector";
import { initModels } from "../models/init-models";

// Init Models
const {document, document_type, user} = initModels(sequelize);

/**
 * 
 * @param req request
 * @param res response
 * @returns Returns user document
 */
export async function getUserDocument(req: Request, res: Response): Promise<void> {


    try {
        // Get addresses
        const userID = req.params.userID;
        const userQuery = await user.findOne({
            include: [
                {
                    model: document,
                    as: 'document_user_document',
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
                document: userQuery.document_user_document,
                userID: userQuery.id_user
            });
            return;
        } else {
            res.status(404).json({
                message: 'No existe documento para el usuario actual, por favor intenta de nuevo',
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



export async function getDocumentByID(req: Request, res: Response): Promise<void> {


    try {
        const documentID = req.params.documentID;
        const documentRequest = await user.findOne({
            include: [
                {
                    model: document,
                    as: 'user_document_document',
                    where: {
                        id_document: documentID,
                        is_active: true,
                        deleted_at: null
                    },
                    include: [
                        {
                            model: document_type,
                            as: 'document_document_type_document_type'
                        }
                    ]
                }
            ],
        });

        if (documentRequest) {

            res.status(200).json({
                document: documentRequest
            });
            return;
        } else {
            res.status(404).json({
                message: 'No se encontró el documento, por favor intenta de nuevo',
            })
            return;
        }

        } catch (e: any) {
            res.status(500).json({
                message: 'Ocurrió un error al cargar información de los tipos de documento, por favor intenta de nuevo',
            })
        }

}