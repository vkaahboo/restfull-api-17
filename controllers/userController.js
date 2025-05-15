const users = require("../db/users");
//conexion a mongo
const userModel = require("../models/userModel")
 
const getAllUser = (req, res) => {
  console.log(req.body)
  res.send(users);
};


 /*
// crear user para la BBDD
const addUser = async (req, res) => {
  try {
    console.log(req.body)
    //req.body trae la informacion del body HTML (front)
    const newUser = req.body;
    console.log(newUser)
    //creamos el usuario (create)
    await userModel.create(newUser)
    res.status(200).send("El usuario se ha creado correctamente");
  } catch (error) {
    res.status(500).send({ status:"Failed", error: error.message })
  }
};
*/

const addFavouriteMovie = async (req, res) => {
  try {
    const { idUser, idMovie } = req.params;
    const user = await userModel.findById(idUser);
    if (!user) {
      return res.status(200).send("No hay usuario");
    }
 
    const movie = await movieModel.findById(idMovie);
    if (!movie) {
      return res.status(200).send("No hay peli");
    }
 
    if (user.favourites.includes(idMovie)) {
      return res.status(200).send("La película ya está en favoritos");
    }
 
    user.favourites.push(idMovie);
    user.save();
 
    res.status(200).send({ status: "Success", data: user });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};
 
//---------- Datos creados con BBDD Estatica ------------------------------------
// obtener user por id
const getUserById = (req, res) => {
  const idUser  = req.params.idUser;
  const user = users.find(u => u.id === parseInt(idUser));
  if(!user) {
    return res.status(200).send('No hay usuario')
  }
  res.send(user);
};

// obtener user por nombre
const getUserByName = (req, res) => {
  const nombre  = req.params.nombre;
  //includes, para que incluya el string del nombre
  const user = users.filter(u => u.nombre.includes(nombre));
  if(user.length === 0) {
    return res.send('No hay usuarios');
  }
  res.send(user);
};

// obtener user por edad
const getUserByAge = (req, res) => {
  //el req.params me coge el parametro de la url (age)
  const age  = req.params.age;
  //como el valor viene en string lo convertimos en int
  //el filter se usa con la clave de la BBDD info (u.edad)
// el find nos devuelve el primer valor que encuentre, el filter me da toda la info de todos los valores
  const user = users.filter(u => u.edad === parseInt(age));
  if(!user) {
    return res.status(200).send('No hay usuario con esa edad')
  }
  res.send(user);
};
 



module.exports = {
  getAllUser,
  getUserById,
  getUserByName,
  getUserByAge,
  addUser
};