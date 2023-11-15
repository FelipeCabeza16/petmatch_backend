import { Request, Response } from "express";
import sequelize from "../helpers/mysql.connector";
import { initModels } from "../models/init-models";

// Init Models
const { document_type } = initModels(sequelize);

/**
 * 
 * @param req request
 * @param res  response
 * @returns Returns all user document types (CC, NIT, CE, etc)
 */
export async function getAllUserDocumentTypes(req: Request, res: Response): Promise<void> {


    try {

        const documentTypes = await document_type.findAll({

            where: {
                is_active: true,
                deleted_at: null
            }
        });

        if (documentTypes && documentTypes.length > 0) {

            res.status(200).json({
                documentTypes
            });
            return;
        } else {
            res.status(404).json({
                message: 'No existen tipos de documento, por favor intenta de nuevo',
            })
            return;
        }

        } catch (e: any) {
            res.status(500).json({
                message: 'Ocurrió un error al cargar información de los tipos de documento, por favor intenta de nuevo',
            })
        }

}


/**
 * 
 * @param req request
 * @param res response
 * @returns Returns document type by ID
 */



export async function getDocumentTypeByID(req: Request, res: Response): Promise<void> {


    try {
        const documentTypeID = req.params.documentTypeID;
        const documentTypes = await document_type.findOne({

            where: {
                id_document_type: documentTypeID,
                is_active: true,
                deleted_at: null
            }
        });

        if (documentTypes) {

            res.status(200).json({
                documentTypes
            });
            return;
        } else {
            res.status(404).json({
                message: 'No existe el tipo de documento, por favor intenta de nuevo',
            })
            return;
        }

        } catch (e: any) {
            res.status(500).json({
                message: 'Ocurrió un error al cargar información de los tipos de documento, por favor intenta de nuevo',
            })
        }

}