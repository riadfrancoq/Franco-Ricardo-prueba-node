import db from '../db/db.js';
import { literal } from 'sequelize';
const {tables} = db;
const {productos} = tables;
export const getProductos = async(req, res) => {
    try {
        const products = await productos.findAll({
            attributes: [[
                "id", "idProducto",
 
            ],
            "nombre",
            "presentacion"
        ],
            include: [{
                association: "productos_stocks",
                required: true,
                attributes: [
                    "id_tienda",
                    [literal('`productos_stocks->id_tienda_tienda`.nombre'), "nombre"],
                    ["cantidad", "stock"]
                ],
                include: {
                    association: "id_tienda_tienda",
                    attributes: []
                }
            }],
        });
        res.send(products);

    } catch (error) {
        console.log(error);
        res.status(404).json({
            message: "Oops Something went wrong"
        });
    }
};