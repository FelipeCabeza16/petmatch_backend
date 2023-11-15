import express from 'express'
import { getModulesByUserID, getOperationsByRoleID, getPermissionsOfModuleByModuleID } from '../controllers/operation';
import { authUser, revalidateToken, postLogDatabase } from '../middleware/';



    const operationRoute = express.Router();    
    // Routes names 

    // Get Permissions on Modules by RoleID
    operationRoute.get('/apiv1/operation/role/:roleID', getOperationsByRoleID);
    // Get Modules by userID
    operationRoute.get('/apiv1/operation/user/module/', authUser, revalidateToken, postLogDatabase,  getModulesByUserID);
    // Get Permissions on Module by userID
    operationRoute.get('/apiv1/operation/user/permission/:moduleID', authUser, revalidateToken, postLogDatabase, getPermissionsOfModuleByModuleID);

    export {operationRoute};




