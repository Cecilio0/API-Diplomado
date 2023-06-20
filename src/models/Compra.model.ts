import { model, Schema } from "mongoose"
import { Compra } from "../interfaces/Compra.interface";

const CompraSchema = new Schema<Compra>({
    carro: {
        type:String,
        required:true
    },
    usuario: {
        type:String,
        required:true
    },
    valor: {
        type:Number,
        default:0
    },
    fechaCompra: {
        type:Date,
        default:Date.now
    }
});
const CompraModel = model('compras', CompraSchema)

export {CompraModel}