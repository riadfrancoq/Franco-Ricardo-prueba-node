import { Router } from "express";

import { categoriasProductos } from "../controllers/categorias.controllers.js";

const router = Router();


router.get('/categorias', categoriasProductos);


export default router;