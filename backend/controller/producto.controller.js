const Producto = require("../models/producto.model");
const {
    crearProducto,
    getAllProductos
} = require("../services/producto.service");

const crearMiProducto = async (req,res)=>{
    try{
        const {nombre,categoria,precio,stock} = req.body;
        const producto = await crearProducto(nombre,categoria,precio,stock);
        res.status(201).json({producto,mensaje:"Producto creado correctamente"}); 
    }catch(error){
        console.log(error)
        res.status(500).json({error});
    }
};

module.exports = {crearMiProducto};