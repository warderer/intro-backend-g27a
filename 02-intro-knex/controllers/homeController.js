/* Los controladores tienen la logica del negocio */
const { create, findAll, findOne, update, destroy, softDelete } = require('../models/Homes')

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

const updateOneHome = (req, res) => {
  update(req.params.idHome, req.body)
    .then((home) => res.status(200).send(home))
    .catch((error) => res.status(400).send({ error: error.message }))
}

const destroyOneHome = (req, res) => {
  destroy(req.params.idHome)
    .then(() => res.status(204).send()) // 204: No Content
    .catch((error) => res.status(400).send({ error: error.message }))
}

const SoftDeleteOneHome = (req, res) => {
  softDelete(req.params.idHome)
    .then(() => res.status(204).send()) // 204: No Content
    .catch((error) => res.status(400).send({ error: error.message }))
}

module.exports = {
  createHome,
  findAllHomes,
  findOneHome,
  updateOneHome,
  destroyOneHome,
  SoftDeleteOneHome
}
