// El modelo trae los datos de la base de datos
// No se encarga de validar los datos, ni de la lógica del negocio
// eso es trabajo del Controlador en MVC

// Paso #1: Necesito traer la configuración del entorno de knex con los detalles de la conexión a la base de datos
const knex = require('../config')

// Paso #2: Es crear las funciones que realicen lo que yo necesite hacer en la base de datos (crear registros, leer registros, actualizar registros, eliminar registros)

const create = (bodyHome) => {
  // Crear un registro en la tabla HOMES
  return knex
    .insert(bodyHome)
    .into('homes')
    .returning(['house_id', 'title', 'description', 'guests', 'address', 'rental_price', 'fk_user', 'active', 'created_at'])
}

const findAll = () => {
  // Leer todos los registros de la tabla HOMES
  return knex
    .select('*')
    .from('homes')
    .where('active', true) // Traemos solo los campos que no hayamos hecho soft delete
}

// Paso #3: Exportar las funciones que yo cree, para que el controlador las utilice
module.exports = {
  create,
  findAll
}
