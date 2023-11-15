import { Request, Response } from "express";
import sequelize from "../helpers/mysql.connector";
import { initModels } from "../models/init-models";

// Init Models
const {city, department} = initModels(sequelize);

/**
 * 
 * @param req request
 * @param res response
 * @returns Returns default city (Bogotá)
 */
export async function getCity(req: Request, res: Response): Promise<void> {


    try {
        // Get City
        const cityQuery = await city.findOne({
            include: [
                {
                    model: department,
                    as: 'city_department_department'
                }
            ],
            where: {
                is_active: 1,
                deleted_at: null
            }
        });

        if (cityQuery) {

            res.status(200).json({
                city: cityQuery
            });
            return;
        } else {
            res.status(404).json({
                message: 'Ocurrió un error al cargar información de la ciudad, por favor intenta de nuevo',
            })
            return;
        }

        } catch (e: any) {
            res.status(500).json({
                message: 'Ocurrió un error al cargar información de la ciudad, por favor intenta de nuevo',
            })
        }

}