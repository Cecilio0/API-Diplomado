import { model, Schema } from "mongoose"
import { Juego } from "../interfaces/Juego.interface"

const JuegoSchema = new Schema<Juego>({
    name:{
        type:String,
        required:true
    },
    speedrun: {
        type:String
    },
    releaseDate:{
        type:Date,
        default:Date.now
    },
    publisher: {
        type:String,
        required:true
    },
    genre: {
        type:[String]
    }
});
const JuegoModel = model('juegos', JuegoSchema)

export {JuegoModel}