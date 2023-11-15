import { NextFunction, Request, Response } from 'express';
import { modulo, operation } from '../../models/init-models';
import { formatModuleType, formatPermissionType } from './helpers';
/**
 * Check if the user has permission to access the module
 * @param req Request
 * @param res Response
 * @param next NextFunction
 * @returns 401 if the user does not have permission to access the module
 */

export const checkModulePermission = async(req: Request, res: Response, next: NextFunction) => {

    try {
        const role = (req as any).role_user as string;
        const permissionType = await formatPermissionType(req.method);
        const moduleType = await formatModuleType(req.originalUrl);
        
        if (!role || !permissionType || !moduleType ) {
            return res.status(500).send({ message: 'Error al verificar permisos.' })
        }
    
    // Check if the user has permission to access the module
    const operationQuery = await operation.findOne({
        where: {
            permission_operation: permissionType.id_permission,
            modulo_operation: moduleType.id_module,
            role_operation: role
            
        }
    });
    if (!operationQuery) {
        return res.status(401).send({ message: 'No tienes permiso para acceder a este módulo.' })
    }
    
    next();
    } 
    
    catch (error) {
        return res.status(401).send({ message: 'No tienes permiso para acceder' })        
    }
}

