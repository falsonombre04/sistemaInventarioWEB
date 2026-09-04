const productos = require("../db/db");
const Producto = require("../models/producto.model");

const crearProducto = (nombre,categoria,precio,stock)=>{
    const id  = productos.length + 1;
    const producto = new Producto(id,nombre,categoria, precio, stock);
    productos.push(producto);
    return producto;
};

const getAllProductos = ()=>{
    return productos;
}
module.exports = {
    crearProducto,
    getAllProductos
};
