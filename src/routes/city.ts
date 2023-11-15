import express from 'express'
import { getCity } from '../controllers/city';



    const cityRoute = express.Router();    
    // Routes names 
    cityRoute.get('/apiv1/city', getCity);

    export {cityRoute};




