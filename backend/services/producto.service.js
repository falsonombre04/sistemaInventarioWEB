const productos = require("../db/db");
const Producto = require("../models/producto.model");

const crearProducto = async (nombre,categoria,precio,stock)=>{
    const producto = new Producto({
        nombre: nombre,
        categoria: categoria,
        precio: precio,
        stock: stock
    });

    return await producto.save();
};

const obtenerProductos = async () => {
    return await Producto.find();
};

const eliminarProducto = async (id) => {
    return await Producto.findByIdAndDelete(id);
};

module.exports = {
    crearProducto,
    obtenerProductos,
    eliminarProducto
};
