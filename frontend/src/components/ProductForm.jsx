import { useState } from "react";
import {crearProducto} from "../services/producto.service";
const ProductForm = ()=>{
    const [producto,setProducto] = useState({
        nombre:"",
        categoria:"",
        precio:"",
        stock:""
    });
    const handleChange = (event)=>{
        const {name, value} = event.target;
        setProducto({
            ...producto,
            [name]:value
        });
    }
    const handleSubmit = async (event)=>{
        event.preventDefault();
            try{
               const datos =await crearProducto(producto);
               console.log(datos); 
            }catch(error){
                console.log(error);
            }
    }
    return(
            <div className="card shadow-sm">
                <div className="card-body">
                    <h4 className="mb-4">
                        Registrar producto
                    </h4>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                name="nombre"
                                value={producto.nombre}
                                onChange={handleChange}
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Categoría</label>
                            <input
                                type="text"
                                className="form-control"
                                name="categoria"
                                value={producto.categoria}
                                onChange={handleChange}
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Precio
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                name="precio"
                                value={producto.precio}
                                onChange={handleChange}
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Stock
                            </label>
                            <input 
                                type="number"
                                className="form-control"
                                name="stock"
                                onChange={handleChange}
                                value={producto.stock}
                            ></input>
                        </div>
                        <button 
                            type="submit"
                            className="btn btn-success w-100"
                        >Registrar producto</button>
                    </form>
                </div>
            </div>

    );
}

export default ProductForm;