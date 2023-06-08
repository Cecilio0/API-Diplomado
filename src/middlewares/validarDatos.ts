import { NextFunction, Request, Response } from "express";

const validarDatosCarro = (req: Request, res: Response, next:NextFunction) => {
    const datos = req.body;
    next();
    console.log("se continua la ejecucion");
    
}

export {validarDatosCarro}