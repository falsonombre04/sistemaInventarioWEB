const express = require("express");
const productoRoutes = express.Router();
const {
    crearMiProducto,
    obtenerMisProductos} = require("../controller/producto.controller");

productoRoutes.post("/",crearMiProducto);
productoRoutes.get('/', obtenerMisProductos);

module.exports = {
    productoRoutes,
};