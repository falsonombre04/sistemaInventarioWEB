const app = require("./app");
const conectarDB = require("./config/db");
const PORT = 3000;

conectarDB();

app.listen(PORT, ()=>{
    console.log(`Ejecutando en servidor en http://localhost:${process.env.PORT}`);
});