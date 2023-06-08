import { Router } from "express";
import { deleteCarroC, getByYear, getCarroC, getCarrosB, getCarrosC, insertCarroC, updateCarroC } from "../controllers/carros.controller";
import { primerMiddleWare, validarAnnoInf, validarAnnoSup } from "../middlewares/log";

const router = Router();

router.get("/:id", getCarroC);

router.get("/buscar/:parametro", getCarrosB);

router.get("/buscarAno/:parametro", [validarAnnoInf, validarAnnoSup], getByYear);

router.get("/", [primerMiddleWare], getCarrosC);

router.post("/", insertCarroC);

router.delete("/:id", deleteCarroC)

router.put("/:id", updateCarroC)

export {router}