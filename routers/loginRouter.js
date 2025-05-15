const express = require("express");
const { signup } = require("../controllers/loginController")
const router = require.Router()

//nuestras rutas
router.post("/signup". signup)

module.experts = router