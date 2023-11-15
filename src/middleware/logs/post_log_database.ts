import { Request, Response, NextFunction } from 'express';
import { log, http_method } from '../../models/init-models';
import { CustomRequest } from '../auth/interfaces';
import { pushLog } from '../../helpers/logs';
import { formatModuleType } from '../permissions';
import { getIpUser } from '../../helpers/connection';
/**
 * Middlewrre to insert log into database fetching module and method from request
 * Alternative get the ip address from request
 */
export const postLogDatabase = async(req: Request, res: Response, next: NextFunction) => {

    try {
    const id_user = (req as unknown as CustomRequest).id_user;
    const module = await formatModuleType(req.originalUrl);
    const method = await http_method.findOne({
        where: {
            http_method: req.method
        }
    });

    if (!method || !id_user || !module) {
        pushLog('Error al insertar log en base de datos - post_log_database.ts')
        next();
    }

    // Insert log into database
    const insertedLog = await log.create({   
        user_id_user: id_user,
        modulo_id_modulo: module.id_module,
        http_method_id_http_method: method.id_http_method,
        ip_address: getIpUser(req)
    });


    pushLog(`Log insertado en base de datos ${insertedLog} - post_log_database.ts`)
    next();

        
        
    } catch (error) {
        pushLog('Error al insertar log en base de datos - post_log_database.ts')
        next();    
    }

}