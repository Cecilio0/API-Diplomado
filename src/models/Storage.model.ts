import { Schema, model } from "mongoose";
import { Storage } from "../interfaces/Storage.interface";
const StorageSchema = new Schema<Storage>({
    fileName:{
        type:String
    },
    idUser:{
        type:String
    },
    path:{
        type:String
    }
})

const StorageModel = model("storage", StorageSchema);
export default StorageModel;