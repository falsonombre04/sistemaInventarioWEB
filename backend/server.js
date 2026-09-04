const app = require("./app");
const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Ejecutando en servidor en http://localhost:${PORT}`);
});