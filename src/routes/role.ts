import express from 'express'
import { getUserRole, getRoleByID, getRoleByName } from '../controllers/role';



    const roleRoute = express.Router();    
    // Routes names 
    roleRoute.get('/apiv1/role/user/:userID', getUserRole);
    roleRoute.get('/apiv1/role/:roleID', getRoleByID);
    roleRoute.get('/apiv1/role/byName/:roleName', getRoleByName);

    export {roleRoute};




