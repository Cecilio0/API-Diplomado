import { Router } from "express";
import { login, registrarUsuarioC } from "../controllers/users.controller";


const router = Router();

router.get("/", login);

router.post("/", registrarUsuarioC);

export {router}