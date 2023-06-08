import { model, Schema } from "mongoose"
import { Carro } from "../interfaces/Carro.interface"

const CarroSchema = new Schema<Carro>({
    id:{
        type:Number
    },
    marca: {
        type:String
    },
    modelo: {
        type:String,
        required:true
    },
    ano: {
        type:Number,
        default:2022
    }
});
const CarroModel = model('carros', CarroSchema)

export {CarroModel}