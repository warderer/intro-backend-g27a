/* Los controladores tienen la logica del negocio */
const { create } = require('../models/Homes')

const createHome = (req, res) => {
  // Aquí yo deberia crear mi home
  // res.send({ message: 'Home creada (FAKE)' })
  create(req.body)
    .then((home) => {
      res.status(201).send(home)
    })
    .catch((error) => {
      res.status(400).send({ error: error.message })
    })
}

module.exports = {
  createHome
}
