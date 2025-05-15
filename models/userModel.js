const mongoose = require("mongoose");
//constructor de nuestro SCHEMA mongo
const Schema = mongoose.Schema;

//creamos una instancia de schema de la libreria mongoose (new schema)
//creamos la informacon de nuestra BBDD
const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },
  lastName: {
    type: String,
    required: [true, "El apellido es obligatorio"],
  },
  email: {
    type: String,
    required: [true, "El email es obligatorio"],
    //debemos definir que es unico
    unique: [true, "El correo ya existe"],
  },
  password: {
    type: String,
    required: [true, "El password es obligatorio"],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  favourites: {
    type: [ mongoose.Schema.Types.ObjectId ],
    ref: "Movie",
  },
});

//creamos modelo user, y se le pasa nombre del modelo (User), el schema (userSchema), coleccion (user)
//recuerda la BBDD se llama movies y una de las colecciones(tablas) sera user
const userModel = mongoose.model("User", userSchema, "user");
 
module.exports = userModel;