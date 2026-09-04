const express = require("express");
const router = express.Router();
const {productoRoutes} = require("./producto.routes");

router.use("/productos",productoRoutes);

module.exports = router;