/* Los controladores tienen la logica del negocio */
const { create, findAll, findOne } = require('../models/Homes')

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

const findAllHomes = (req, res) => {
  findAll()
    .then((homes) => res.status(200).send(homes))
    .catch((error) => res.status(400).send({ error: error.message }))
}

const findOneHome = (req, res) => {
  findOne(req.params.idHome)
    .then((home) => res.status(200).send(home))
    .catch((error) => res.status(400).send({ error: error.message }))
}

module.exports = {
  createHome,
  findAllHomes,
  findOneHome
}
