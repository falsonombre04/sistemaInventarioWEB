const {crearProducto,getAllProductos}= require("./services/producto.service");
crearProducto("Capri");
crearProducto("Buzo");

console.log(getAllProductos());
