import { Router } from "express";
import { deleteCarroC, getByYear, getCarroC, getCarrosB, getCarrosC, insertCarroC, updateCarroC } from "../controllers/carros.controller";
import { primerMiddleWare, validarAnnoInf, validarAnnoSup } from "../middlewares/log";
import { validarDatos } from "../middlewares/carrosValidation";
import { checkIsAdmin } from "../middlewares/checkJWT";

const router = Router();

router.get("/:id", getCarroC);

router.get("/buscar/:parametro", getCarrosB);

router.get("/buscarAno/:parametro", [validarAnnoInf, validarAnnoSup], getByYear);

router.get("/", [primerMiddleWare], getCarrosC);

router.post("/", validarDatos, insertCarroC);

router.delete("/:id", checkIsAdmin, deleteCarroC)

router.put("/:id", updateCarroC)

export {router}