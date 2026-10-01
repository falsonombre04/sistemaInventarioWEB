const productos = require("../db/db");
const Producto = require("../models/producto.model");

const crearProducto = async (nombre,categoria,precio,stock)=>{
    const producto = new Producto({
        nombre: nombre,
        categoria: categoria,
        precio: precio,
        stock: stock
    });

    const productoGuardado = await producto.save();
    console.log("-------------------------")
    console.log("Producto guardado:", productoGuardado);
    console.log("Base de datos:", Producto.db.name);
    console.log("Colección:", Producto.collection.name);
    console.log("-------------------------")
    return productoGuardado;
};

const getAllProductos = ()=>{
    return productos;
}
module.exports = {
    crearProducto,
    getAllProductos
};
