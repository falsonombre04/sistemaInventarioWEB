const mongoose = require("mongoose");
require("dotenv").config();


const conectarDB = async () => {
    try {                       
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB conectado correctamente");
    } catch (error) {
        console.error("Error al conectar con MongoDB:", error.message);
        process.exit(1);
    }
};

mongoose.connection.once("open", () => {
    console.log("Conectado a MongoDB");
    console.log("Base de datos:", mongoose.connection.name);
});

module.exports = conectarDB;