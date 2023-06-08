import { Carro } from "../interfaces/Carro.interface";
import { CarroModel } from "../models/Carro.model";

const getCarros = async() => {
    const carros = await CarroModel.find({});
    return carros;
}

const getCarro = async(_id: string) => {
    const carros = await CarroModel.find({_id: _id});
    return carros;
}

const insertCarro = async(carro:Carro) => {
    return await CarroModel.create(carro);
}

const deleteById = async(id:string) => {
    return await CarroModel.deleteOne({_id: id});
}

const updateCarro = async(id:string, data:Carro) => {
    return await CarroModel.updateOne({_id: id}, data);
}

const buscar = async(parametro: string) => {
    const carros = await CarroModel.find({
        $or:[
            {marca: parametro},
            {modelo: parametro}
        ]
    });
    return carros;
}

const findByYear = async(year:number) => {
    const carros = await CarroModel.find({
        ano: {$gte: year}
    });
    return carros;
}

export {getCarro, getCarros, insertCarro, deleteById, updateCarro, buscar, findByYear}