/**
 * @param {string} module url - Module url endpoint
 * example: /apiv1/siipev/acciones
 * Always the third element of the array is the module name
 * @returns {ModuleType} - Module type object with module id and module name
 */

import { modulo } from "../../../models/init-models";
import { ModuleType } from "../types";
import { Op } from "sequelize";

export const formatModuleType = async (module_url: string): Promise<ModuleType> => {


    const module_url_array = module_url.split('/');
    const module_name = module_url_array[3].toUpperCase();

    const moduleQuery = await modulo.findOne({
        where: {
            modulo: {
                [Op.like]: `%${module_name}%`
            }
        }
    });

    if (!moduleQuery) {
        throw new Error('No se encontró el módulo.')
    }

    const moduleType: ModuleType = {
        id_module: moduleQuery.id_modulo,
        module: moduleQuery.modulo
    }

    return moduleType;


}
