import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

const validarDatosUsuario = [
    body("name").notEmpty().withMessage("Campo Obligatorio").isAlphanumeric().isLength({ max:40 }).withMessage("usuario demasiado largo"),
    body("password").exists().isStrongPassword(),//es posible encadenar varias verificaciones
    body("rol").isAlpha(),
    (req:Request, res:Response, next:NextFunction) => {
        const result = validationResult(req);
        if(result.array().length === 0){
            next();
            return;
        }

        console.log(result.array().length);
        res.send(result)
        
    }
]

export {validarDatosUsuario}