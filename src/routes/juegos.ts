import { Router } from "express";
import { getJuegosC, insertJuegoC, getJuegoById, getJuegosByTag, updateJuegoC, deleteJuegoC } from "../controllers/juegos.controller";


const router = Router();

router.get("/", getJuegosC)

router.get("/id=:id", getJuegoById)

router.get("/tag=:tag", getJuegosByTag)

router.post("/", insertJuegoC)

router.put("/:id", updateJuegoC)

router.delete("/:id", deleteJuegoC)

export {router}