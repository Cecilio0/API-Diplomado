import { NextFunction, Request, Response } from "express";
import { VerifyToken, obtenerRol } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";

const checkJWT = (req:Request, res:Response, next:NextFunction) => {
    try{
        const jwtByUser = req.headers.authorization || "";//seleccione el header y si no se envia nada rellenar con un string vacio
        console.log(jwtByUser);
        const jwt = jwtByUser.split(" ")[1];

        const isOk = VerifyToken(jwt);
        console.log(isOk);
        
        if(isOk){
            const rol = obtenerRol(jwt)
            next();
            return;
        } else {
            res.send({message:"invalid session"})
        }
        
    } catch(e) {
        res.status(400).send({message:"invalid session"})
    }
}

const checkIsAdmin = async(req: Request, res:Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(" ")[1];
        const isOk = VerifyToken(jwt) as JwtPayload;
        const rol:string = isOk.rol;
        if(rol.toLowerCase() === "admin"){
            next();
            return;
        }
        res.send({ message: "El Usuario no tiene permisos suficientes"})

    } catch(e) {

    }
}

const checkIsBecario = async(req: Request, res:Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(" ")[1];
        const isOk = VerifyToken(jwt) as JwtPayload;
        const rol:string = isOk.rol.toLowerCase();
        if(rol === "admin" || rol === "becario"){
            next();
            return;
        }
        res.send({ message: "El Usuario no tiene permisos suficientes"})

    } catch(e) {

    }
}

export {checkJWT, checkIsAdmin}