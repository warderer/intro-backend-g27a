// 1- Importar Express 
const express = require('express');
const petRouter = require('./api/v1/pets');
const cakeRouter = require('./api/v1/cakes');
const pokeRouter = require('./api/v1/pokemons');
// Tarea: desestructuren use, get, listen de express

// 2- Crear una instancia de Express
const app = express();

// 3- Configurar mi aplicacion de Express
app.use(express.json()); //para leer los Jsons que vienen en el body o de Postman
app.use(express.urlencoded({ extended: true }));  //para leer los datos que vienen de un formulario	

// 4- Crear una ruta
app.get('/', (request, response )=>{ response.send('Hola Mundo') })

//6- Importar las rutas de otros archivos
app.use(petRouter);
app.use(cakeRouter);
app.use(pokeRouter);

// app.get('/saludos', (request, response )=>{
//   response.send('Saludos desde la pagina de saludos');
// })

// 5- Levantar el servidor
app.listen(3000, ()=> console.log('Servidor escuchando en el puerto 3000') )


