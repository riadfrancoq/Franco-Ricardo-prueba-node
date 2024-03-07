import db from "../db/db.js";
import { fn, col, literal } from "sequelize";
const {tables} = db;
const {categorias, productos_categorias} = tables;


export const categoriasProductos = async(req, res) => {
    try {
        const products_categories = await categorias.findAndCountAll({
            attributes: [
                ["id", "idCategoria"],
                "nombre",
                [literal('(SELECT COUNT(*) FROM productos_categorias where productos_categorias.id_categoria=categorias.id)'), 'cantProductos']
            
            ],

            include: {
                association: "productos_categoria",
                required: true,
                attributes: []
            },
            


        });
        res.status(200).json({
            message: "Categorias encontradas satisfactoriamente",
            data: products_categories});

    } catch (error) {
        console.log(error);
        res.status(404).json({
            message: "Oops Something went wrong"
        });
    }


};