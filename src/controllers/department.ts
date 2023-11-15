import { Request, Response } from "express";
import sequelize from "../helpers/mysql.connector";
import { initModels } from "../models/init-models";

// Init Models
const {department} = initModels(sequelize);

/**
 * 
 * @param req request
 * @param res response
 * @returns Returns default department (Cundinamarca)
 */
export async function getDepartment(req: Request, res: Response): Promise<void> {


    try {
        // Get Cities
        const departmentQuery = await department.findOne({
            where: {
                is_active: 1,
                deleted_at: null
            }
        });

        if (departmentQuery) {

            res.status(200).json({
                department: departmentQuery
            });
            return;
        } else {
            res.status(404).json({
                message: 'Ocurrió un error al cargar información del departamento, por favor intenta de nuevo',
            })
            return;
        }

        } catch (e: any) {
            res.status(500).json({
                message: 'Ocurrió un error al cargar información del departamento, por favor intenta de nuevo',
            })
        }

}