import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

const validarDatos = [
    body("id").isNumeric(),
    body("marca").isLength({ min:3 }).exists(),//es posible encadenar varias verificaciones
    body("modelo").isLength({ min:3 }),
    body("ano").isNumeric(),
    (req:Request, res:Response, next:NextFunction) => {
        try {
            const result = validationResult(req);
            if(result.array().length === 0){
                next();
                return;
            }

            console.log(result.array().length);
            res.send(result)
        } catch(e) {

        }
        
    }
]

export {validarDatos}