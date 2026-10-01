import axios from 'axios';

const API_URL = "http://localhost:3000/api/productos";

export const crearProducto = async (producto)=>{
    const response = await axios.post(API_URL,producto);

    return response;
}