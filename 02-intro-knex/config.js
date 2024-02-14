// Dependiendo de la variable de Entorno del Sistema, va a tomar las credenciales de la base de datos correspondiente.

// Tomar la configuración del entorno de Node, y si no existe por defecto usare development
const env = process.env.NODE_ENV || 'development'

const knexfile = require('./knexfile')
const knex = require('knex')

// Mandar a llamar la configuración correcta de knexfile
module.exports = knex(knexfile[env])
