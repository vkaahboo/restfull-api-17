const express = require("express");
const router = express.Router();
const { addMovie } = require("../controllers/moviesController");
router.post("/", addMovie);
 
module.exports = router;
 
 

 
 