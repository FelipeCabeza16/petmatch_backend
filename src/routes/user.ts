import express from 'express'
import { getUserByID, getUserByFieldName, getUserByRazonSocial, registerUser, loginUser, getUserProfile } from '../controllers/user';
import { authUser, revalidateToken } from '../middleware/auth';



    const userRoute = express.Router();    
    // Routes names 
    userRoute.get('/apiv1/user/:userID', getUserByID);
    userRoute.post('/apiv1/user/byFieldName/:fieldName', getUserByFieldName);
    // Receives document number and check if its NIT and check razon social
    userRoute.post('/apiv1/user/byRazonSocial/', getUserByRazonSocial);
    // Register new user
    userRoute.post('/apiv1/user/', registerUser);
    // Login User
    userRoute.post('/apiv1/user/login', loginUser);
    // Profile
    userRoute.get('/apiv1/user/profile/me', authUser, revalidateToken, getUserProfile);


    export {userRoute};




