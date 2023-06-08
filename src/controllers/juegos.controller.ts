import { Request, Response } from "express";
import { Juego } from "../interfaces/Juego.interface";
import { deleteJuego, getJuegoPorId, getJuegos, getJuegosPorTag, insertJuego, updateJuego } from "../services/juego.service";


const getJuegosC = async(req:Request, res:Response) => {
    try{
        const response = await getJuegos();

        if(response.length == 0)
            res.send({ message: "no se encontraron juegos"})
        res.send(response)

    }catch(e){
        console.log(e);
    }
}

const getJuegoById = async(req:Request, res:Response) => {
    try{
        const response = await getJuegoPorId(req.params.id);

        if(!response)
            res.send({ message: "no se encontro el juego"})
        res.send(response)

    }catch(e){
        console.log(e);
    }
}

const getJuegosByTag = async(req:Request, res:Response) => {
    try{
        const response = await getJuegosPorTag(req.params.tag);

        if(response.length == 0)
            res.send({ message: "no se encontraron juegos de este genero"})
        res.send(response)

    }catch(e){
        console.log(e);
    }
}

const insertJuegoC = async(req:Request, res:Response) => {
    try{
        const juego:Juego = req.body;
        console.log(juego);
        
        const response = await insertJuego(juego);
        res.send(response);

    }catch(e){
        console.log(e);
    }
}

const updateJuegoC = async(req:Request, res:Response) => {
    try{
        const id:string = req.params.id;
        const juego:Juego = req.body;
        console.log(juego);
        
        const response = await updateJuego(id, juego);
        res.send(response);

    }catch(e){
        console.log(e);
    }
}

const deleteJuegoC = async(req:Request, res:Response) => {
    try{
        const response = await deleteJuego(req.params.id);

        if(!response)
            res.send({ message: "no se encontraron juegos"})
        res.send(response)

    }catch(e){
        console.log(e);
    }
}


export {getJuegosC, getJuegoById, getJuegosByTag, insertJuegoC, updateJuegoC, deleteJuegoC}