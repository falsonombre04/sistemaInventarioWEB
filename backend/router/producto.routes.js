const express = require("express");
const productoRoutes = express.Router();
const {crearMiProducto} = require("../controller/producto.controller");

productoRoutes.post("/",crearMiProducto);

module.exports = {
    productoRoutes
};