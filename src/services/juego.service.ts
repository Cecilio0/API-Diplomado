import { Juego } from "../interfaces/Juego.interface";
import { JuegoModel } from "../models/Juego.model";

const getJuegos = async() => {
    const juegos = await JuegoModel.find({});
    return juegos;
}

const getJuegoPorId = async(id:string) => {
    const juego = await JuegoModel.findOne({_id: id});
    return juego;
}

const getJuegosPorTag = async(tag:string) => {
    const juego = await JuegoModel.find(
        {
            genre: tag
        }
    );
    return juego;
}

const insertJuego = async(juego:Juego) => {
    return await JuegoModel.create(juego);
}

const updateJuego = async(id:string, newJuego:Juego) => {
    return await JuegoModel.updateOne(
        {
            _id:id
        },
        newJuego
    );
}

const deleteJuego = async(id:string) => {
    return await JuegoModel.deleteOne(
        {
            _id:id
        }
    );
}

export {getJuegos, getJuegoPorId, getJuegosPorTag, insertJuego, updateJuego, deleteJuego}