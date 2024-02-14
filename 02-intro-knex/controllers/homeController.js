/* Los controladores tienen la logica del negocio */

const createHome = (req, res) => {
  // Aquí yo deberia crear mi home
  res.send({ message: 'Home creada (FAKE)' })
}

module.exports = {
  createHome
}
