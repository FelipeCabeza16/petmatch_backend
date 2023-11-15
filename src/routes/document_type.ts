import express from 'express'
import { getAllUserDocumentTypes,getDocumentTypeByID  } from '../controllers/document_type';



    const documentTypeRoute = express.Router();    
    // Routes names 
    documentTypeRoute.get('/apiv1/documentType/', getAllUserDocumentTypes);
    documentTypeRoute.get('/apiv1/documentType/:documentTypeID', getDocumentTypeByID);

    export {documentTypeRoute};




