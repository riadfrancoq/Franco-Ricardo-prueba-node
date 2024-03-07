import { Router } from "express";

import { getProductos } from "../controllers/productos.controllers.js";

const router = Router();


router.get('/productos', getProductos);


export default router;