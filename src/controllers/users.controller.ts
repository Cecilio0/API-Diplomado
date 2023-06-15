import { Request, Response } from "express";
import { getJuegos, insertJuego } from "../services/juego.service";
import { loginUsuario, registrarUsuario } from "../services/user.service";
import { User } from "../interfaces/User.interface";


const login = async(req:Request, res:Response) => {
    try{
        const user:User = req.body;
        const loginUser = await loginUsuario(user);

        if(loginUser === "El usuario no existe" || "Usuario o password Incorrectos")
            res.send({message: loginUser})
        else    
            res.status(200).send(loginUser);
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