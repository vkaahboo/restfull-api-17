// GET -> GET PARA OBTENER RECURSOS -> find
// POST -> POST PARA CREAR RECURSOS -> create
// PUT -> PUT PARA ACTUALIZAR RECURSOS -> updateOne
// DELETE -> DELETE PARA ELIMINAR RECURSOS -> deteleOne
// PATCH -> PATCH PARA ACTUALIZAR PARCIALMENTE RECURSOS -> updateOne
 
const PORT = 3000;
const express = require('express');
const userRouter = require('./routers/userRouter');
const connectToDatabase = require('./db/connectDb');
const loginRouter = require("./routers/loginRouter")

//permite acceder a las variables de entorno desde cualquier arte de la app
require("dotenv").config();
const connectToDatabase = require("./db/connectDb")

 
const app = express();
//Analiza el JSON que se esta trabajando
app.use(express.json());

//conexion BBDD
connectToDatabase();

//URLS
app.use('/api/user', userRouter)
app.use('/api/auth', loginRouter)


 
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

 



/* ENDPOINTS
app.get('/prueba1', (req, res) => {
    res.send('Hola, mundo 1!')
});
 
app.get('/prueba2', (req, res) => {
    res.send('Hola, mundo 2!')
});
*/
 