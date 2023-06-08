import { NextFunction, Request, Response } from "express";

const primerMiddleWare = (req: Request, res: Response, next:NextFunction) => {
    console.log("hola desde el middleware");
    next();
    console.log("se continua la ejecucion");
    
}

const validarAnnoInf = (req: Request, res: Response, next:NextFunction) => {
    const year = req.params.parametro;
    if(Number(year) < 1950){
        res.send({message: "año invalido"})
    } else {
        next();
    }
}

const validarAnnoSup = (req: Request, res: Response, next:NextFunction) => {
    const year = req.params.parametro;
    if(Number(year) > 2024){
        res.send({message: "año invalido"})
    } else {
        next();
    }
}

export {primerMiddleWare, validarAnnoInf, validarAnnoSup}