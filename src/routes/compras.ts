import { Router } from "express";
import { hacerCompra, mostrarCompras, mostrarComprasCarro, mostrarComprasUsuario } from "../controllers/compras.controller";


const router = Router();

router.post("/", hacerCompra);

router.get("/", mostrarCompras);

router.get("/usuario=:id", mostrarComprasUsuario);

router.get("/carro=:id", mostrarComprasCarro);

export {router}