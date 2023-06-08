
import { User } from "../interfaces/User.interface";
import { UserModel } from "../models/User.model";
import { encrypt, verify } from "../utils/bcrypt.handle";
import { signToken } from "../utils/jwt.handle";


const registrarUsuario = async(user:User) => {
    const userExist = await UserModel.findOne({name:user.name});
    if(userExist){
        return "El usuario ya existe"
    }
    const passwordHash = await encrypt(user.password);
    const newUser = await UserModel.create({
        name:user.name,
        password:passwordHash,
        rol:user.rol
    });
    return newUser;
}

const loginUsuario = async(user:User) => {
    const userExist = await UserModel.findOne({name:user.name});
    if(!userExist){
        return "El usuario no existe";
    }
    const passwordHash = userExist.password;
    const isMatch = await verify(user.password, passwordHash);
    if(!isMatch){
        return "Usuario o password incorrectos";
    }
    const token = await signToken(user.name);
    const data = {
        token: token,
        user: {
            name: user.name,
            rol: userExist.rol
        }
    }
    return data;
}

export {registrarUsuario, loginUsuario}