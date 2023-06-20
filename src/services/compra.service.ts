
import { User } from "../interfaces/User.interface";
import { CarroModel } from "../models/Carro.model";
import { CompraModel } from "../models/Compra.model";
import { UserModel } from "../models/User.model";

import { encrypt } from "../utils/bcrypt.handle";


const insertarCompra = async(idUsuario:string, idCarro:string, valor:number) => {
    
    const userExist = await UserModel.findOne({_id:idUsuario});
    if(!userExist){
        return "El usuario no se pudo encontrar"
    }
    const carroExist = await CarroModel.findOne({_id:idCarro});
    if(!carroExist){
        return "El carro no se pudo encontrar"
    }
    const newCompra = await CompraModel.create({
        carro: carroExist._id,
        usuario: userExist._id,
        valor: valor
    });
    return newCompra;
}

const getCompras = async() => {
    const compras = await CompraModel.find({});
    return compras;
}

const getComprasUsuario = async(id:string) => {
    const compras = await CompraModel.find({usuario:id});
    return compras;
}

const getComprasCarro = async(id:string) => {
    const compras = await CompraModel.find({carro:id});
    return compras;
}

export {insertarCompra, getCompras, getComprasUsuario, getComprasCarro}