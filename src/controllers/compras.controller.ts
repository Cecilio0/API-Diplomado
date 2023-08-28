import { Request, Response } from "express";
import { getCompras, getComprasCarro, getComprasUsuario, insertarCompra } from "../services/compra.service";
import { VerifyToken } from "../utils/jwt.handle";


const hacerCompra = async(req:Request, res:Response) => {
    try{

        const jwt = VerifyToken(req.headers.authorization || "");

        if (!jwt){
            res.send({ error: "invalid session" })
        }
        const body = req.body;
        const idUsuario:string = body.idUsuario;
        const idCarro:string = body.idCarro;
        const valor:number = Number(body.valor);

        const response = await insertarCompra(idUsuario, idCarro, valor)

        res.status(201).send(response)
    }catch(e){
        console.log(e);
    }
}

const mostrarCompras = async(req:Request, res:Response) => {
    try{
        const response = await getCompras()

        res.status(200).send(response)
    }catch(e){
        console.log(e);
        
    }
}

const mostrarComprasUsuario = async(req:Request, res:Response) => {
    try{
        const response = await getComprasUsuario(req.params.id);
        res.status(200).send(response);
    }catch(e){
        console.log(e); 
    }
}

const mostrarComprasCarro = async(req:Request, res:Response) => {
    try{
        const response = await getComprasCarro(req.params.id);
        res.status(200).send(response);
    }catch(e){
        console.log(e); 
    }
}


export {hacerCompra, mostrarCompras, mostrarComprasUsuario, mostrarComprasCarro}