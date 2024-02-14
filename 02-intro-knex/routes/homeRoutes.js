const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')

router.post('/homes', homeController.createHome)

module.exports = router
