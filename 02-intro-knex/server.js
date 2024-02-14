const express = require('express');

const app = express();

/* Middlewares (opcional) */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* Rutas */


/* Poner el servidor a escuchar */
app.listen(3000,()=> {
    console.log('Server ON: 3000');
})