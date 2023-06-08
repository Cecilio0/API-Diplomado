import { Request, Response } from "express";
import { getJuegos, insertJuego } from "../services/juego.service";
import { loginUsuario, registrarUsuario } from "../services/user.service";
import { User } from "../interfaces/User.interface";


const login = async(req:Request, res:Response) => {
    try{
        const user = req.body;
        const newUser = await loginUsuario(user);
        res.status(200).send(newUser);
    }catch(e){
        
    }
}

const registrarUsuarioC = async(req:Request, res:Response) => {
    try{
        const user:User = req.body;
        
        const newUser = await registrarUsuario(user);
        res.send(newUser);
    }catch(e){
        
    }
}


export {registrarUsuarioC, login}