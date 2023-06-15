import { Router } from "express";
import { login, registrarUsuarioC } from "../controllers/users.controller";
import { validarDatosUsuario } from "../middlewares/UserValidation";
import { checkJWT } from "../middlewares/checkJWT";


const router = Router();

router.get("/", login);

router.post("/", validarDatosUsuario, registrarUsuarioC);

export {router}