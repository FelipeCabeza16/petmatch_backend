import express from 'express'
import { getUserDocument, getUserByDocument, getDocumentByID } from '../controllers/document';



    const documentRoute = express.Router();    
    // Routes names 
    documentRoute.get('/apiv1/document/user/:userID', getUserDocument);
    documentRoute.post('/apiv1/document/user/', getUserByDocument);
    documentRoute.get('/apiv1/document/:documentID', getDocumentByID);


    export {documentRoute};




