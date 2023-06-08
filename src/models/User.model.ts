import { model, Schema } from "mongoose"
import { User } from "../interfaces/User.interface";

const UserSchema = new Schema<User>({
    name:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true
    },
    rol:{
        type:String,
        default: "esclavo"
    },
});
const UserModel = model("users", UserSchema)

export {UserModel}