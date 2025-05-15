const express = require("express");
const router = express.Router();
const { getAllUser, getUserById , getUserByName, getUserByAge } = require("../controllers/userController");
 
router.get("/", getAllUser);
//router.post("/", addUser);
router.get("/:idUser", getUserById);
// cuando los endpoints tienen valores dinamicos hay que diferenciar el path de 
//la url con un nombre antes del valor dinamico, ya que se leen los endpoints de arriba a abajo
router.get("/searchName/:nombre", getUserByName);
router.get("/searchAge/:age", getUserByAge);

router.patch("/:idUser/favourites/:idMovie", addFavouriteMovie);
 
module.exports = router;
 
// http://localhost:3000/api/user
// http://localhost:3000/api/user/9
// http://localhost:3000/api/user/searchName/Diego
// http://localhost:3000/api/user/searchAge/40//