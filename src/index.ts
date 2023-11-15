// Express
import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import  corsOptions   from './helpers/cors/cors.config';
// Database
import * as MySQLConnector from './helpers/mysql.connector';
// Models
// import { initModels, address, auth, city, department, document_type, document, file, http_method, log, modulo, operation, permission, person_type, role, user } from './models/init-models';
import { postTrimmer } from './middleware/request/';
import { cityRoute, addressRoute, departmentRoute, documentTypeRoute, documentRoute, roleRoute, operationRoute, userRoute  } from './routes';
import { expressLogger } from './middleware/logs';

// Routes 
const app = express();
const port = process.env['PORT'] || 3010;

// Options
app.use (cors(corsOptions));

app.use (bodyParser.json());
app.use (bodyParser.urlencoded({extended:true}));



// Init Models Sequelize
MySQLConnector.init();


// Middleware
app.use(postTrimmer)
// Middleware log
// app.use(expressLogger);

process.on('uncaughtException', function (exception) {
  console.log(exception); 
});

// To get the real client IP address
app.set('trust proxy', true);

// Routes
app.use(addressRoute);
app.use(cityRoute);
app.use(departmentRoute);
app.use(documentTypeRoute);
app.use(documentRoute);
app.use(operationRoute);
app.use(roleRoute);
app.use(userRoute);

// TODO: consultar recompilacion automatica de typescript

// TODO: sleep de intentos en el front end


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

export default app;