//se llama a la libreria moongose
const mongoose = require("mongoose");
 
const connectToDatabase = async () => {
  try {
    //url BBDD que es nuestra variable de entorno
    const URL_MONGO = process.env.URL_MONGO;
    await mongoose.connect(URL_MONGO);
    console.log("Conexión a mongoDB exitosa");
  } catch (error) {
    console.log("Error al conectar con mongoDB", error);
  }
};
 
module.exports = connectToDatabase;