const Producto = require("../models/producto.model");
const {
    crearProducto,
    obtenerProductos,
    eliminarProducto
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

const obtenerMisProductos = async (req, res) => {
    try {
        const productos = await obtenerProductos();

        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al obtener los productos'
        });
    }
};

const eliminarMiProducto = async (req, res) => {
    try {
        const producto = await eliminarProducto(req.params.id);

        if (!producto) {
            return res.status(404).json({
                mensaje: 'Producto no encontrado'
            });
        }

        res.status(200).json({
            mensaje: 'Producto eliminado correctamente',
            producto
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            mensaje: 'Error al eliminar el producto'
        });
    }
};

module.exports = {
    crearMiProducto,
    obtenerMisProductos,
    eliminarMiProducto
};