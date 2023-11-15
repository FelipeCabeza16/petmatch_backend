import express from 'express'
import { getDepartment } from '../controllers/department';



    const departmentRoute = express.Router();    
    // Routes names 
    departmentRoute.get('/apiv1/department', getDepartment);

    export {departmentRoute};




