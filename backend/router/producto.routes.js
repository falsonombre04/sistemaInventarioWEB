const express = require("express");
const productoRoutes = express.Router();
const {
    crearMiProducto,
    obtenerMisProductos,
    eliminarMiProducto
} = require("../controller/producto.controller");

productoRoutes.post("/",crearMiProducto);
productoRoutes.get('/', obtenerMisProductos);
productoRoutes.delete("/:id",eliminarMiProducto);

module.exports = {
    productoRoutes,
};