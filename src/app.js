import express from "express";
import productosRouter from "./routes/productos.routes.js";
import categoriasRouter from "./routes/categorias.routes.js";
// cambie esto con cuidado 
 // import productosRouter from './routes/productos.routes.js';
const app = express();

app.use(express.json());

app.use('/api/', productosRouter, categoriasRouter);
export default app;