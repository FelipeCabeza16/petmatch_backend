

/**
 * Formats the permission type received from the http request method
 * @param {string} request_method - Request method (GET, POST, PUT)
 * @returns {PermissionType} - Permission type object with LECTURA or ESCRITURA permission
 */

import { permission } from "../../../models/init-models";
import { PermissionType } from "../types";

export const formatPermissionType = async(request_method: string): Promise<PermissionType> => {

    const allowedReadingPermissions = ['GET'];

    const allowedWritingPermissions = ['POST', 'PUT'];


    const getAllPermissionsDatabase = await permission.findAll({});
    const readingPermission = getReadingPermission(getAllPermissionsDatabase);
    const writingPermission = getWritingPermission(getAllPermissionsDatabase);

    try {
    
        if (allowedReadingPermissions.includes(request_method)) {
            return readingPermission;
        } else if (allowedWritingPermissions.includes(request_method)) {
            return writingPermission;
        } else {
            throw new Error('El permiso no está permitido.')
        }
    } catch (error) {
        throw new Error('El método no está permitido.')
    }
}

const getReadingPermission = (permissions: permission[]):PermissionType => {
    // SEARCH FOR THE "LECTURA" PERMISSION
    const readingPermission = permissions.find(permission => permission.permission === 'LECTURA');
    if (!readingPermission) {
        throw new Error('No se encontró el permiso de lectura.')
    }

    const readingPermissionType: PermissionType = {
        id_permission: readingPermission.id_permission,
        permission: readingPermission.permission
    }
    return readingPermissionType;
}

const getWritingPermission = (permissions: permission[]):PermissionType => {
    // SEARCH FOR THE "ESCRITURA" PERMISSION
    const writingPermission = permissions.find(permission => permission.permission === 'ESCRITURA');
    if (!writingPermission) {
        throw new Error('No se encontró el permiso de escritura.')
    }

    const writingPermissionType: PermissionType = {
        id_permission: writingPermission.id_permission,
        permission: writingPermission.permission
    }
    return writingPermissionType;

}

