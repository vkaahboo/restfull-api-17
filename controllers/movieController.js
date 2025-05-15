const MovieModel = require("../models/moviesModel");
 
const addMovie = async (req, res) => {
  try {
    const movieData = req.body;
    await MovieModel.create(movieData);
    res.status(200).send("La peli se ha creado correctamente");
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};
 
module.exports = {
  addMovie,
};