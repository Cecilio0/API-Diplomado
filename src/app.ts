import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { router } from "./routes/index";
import dbConnect from "./config/dbConnection";

//documentacion
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from 'swagger-jsdoc';

import { options } from './utils/swagger.utils';

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());//de esta manera permite que todos los origenes consuman la api

app.use(express.json());
app.use(router);

const specs = swaggerJSDoc(options);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs))

dbConnect().then(() => console.log("Succesful connection")); 


app.listen(PORT, () => {
    console.log("Listening on PORT: " + PORT)
});