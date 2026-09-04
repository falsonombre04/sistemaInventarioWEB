const request = require("supertest");
const app = require("../app");
const productos = require("../db/db");

describe("Pruebas del sistema de inventario",()=>{
    beforeEach(()=>{
        productos.length = 0;
    });
    describe("POST /api/producto",()=>{
        test("Debe crear un producto correctamente", async ()=>{
            const response = await request(app)
            .post("/api/productos/").send({
                    nombre: "Hamaca",
                    categoria: "Hogar",
                    precio: 80000,
                    stock: 10
            });
            expect(response.statusCode).toBe(201);

            expect(response.body.producto).toEqual({
                id: 1,
                nombre: "Hamaca",
                categoria: "Hogar",
                precio: 80000,
                stock: 10
            });
        });
    });
});