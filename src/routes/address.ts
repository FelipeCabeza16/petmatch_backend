import express from 'express'
import { getAllUserAddresses, getCurrentUserAddress, getAllAddressByID } from '../controllers/address';



    const addressRoute = express.Router();    
    // Routes names 
    
    addressRoute.get('/apiv1/address/user/:userID', getAllUserAddresses);
    addressRoute.get('/apiv1/address/:addressID', getAllAddressByID);
    addressRoute.get('/apiv1/address/current/user/:userID', getCurrentUserAddress);

    export {addressRoute};




