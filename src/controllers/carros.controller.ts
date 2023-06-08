import { Request, Response } from "express";
import { Carro } from "../interfaces/Carro.interface";
import { buscar, findByYear, getCarro, getCarros, insertCarro, deleteById, updateCarro } from "../services/carro.service";


const getCarroC = async(req:Request, res:Response) => {
    try{
        const response = await getCarro(req.params.id);

        if(response.length == 0)
            res.send({ message: "no se encontro un vehiculo con ese id"})
        res.send(response)

    }catch(e){
        
    }
}

const getCarrosC = async(req:Request, res:Response) => {
    try{
        const response = await getCarros();
        res.send(response)
    }catch(e){
        
    }
}

const getCarrosB = async(req:Request, res:Response) => {
    try{
        const parametro = req.params.parametro;
        const carros = await buscar(parametro);
        res.send(carros)
    }catch(e){
        
    }
}

const insertCarroC = async(req:Request, res:Response) => {
    try{
        const carro:Carro = req.body;
        const response = await insertCarro(carro);
        res.send(response);
    }catch(e){

    }
}

const updateCarroC = async(req:Request, res:Response) => {
    try{
        const id:string = req.params.id;
        const data:Carro = req.body;
        const response = await updateCarro(id, data);
        res.send(response);
    }catch(e){

    }
}

const deleteCarroC = async(req:Request, res:Response) => {
    try{
        const id:string = req.params.id;
        const response = await deleteById(id);
        res.send(response);
    }catch(e){

    }
}

const getByYear = async(req:Request, res:Response) => {
    try{
        const year = req.params.parametro;
        const nyear = Number(year);
        const carros = await findByYear(nyear);
        res.send(carros)
    }catch(e){
        
    }
}

export {getCarroC, getCarrosC, insertCarroC, getCarrosB, deleteCarroC, updateCarroC, getByYear}