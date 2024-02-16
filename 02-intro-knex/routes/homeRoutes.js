const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')

router.post('/homes', homeController.createHome)
router.get('/homes', homeController.findAllHomes)
router.get('/homes/:idHome', homeController.findOneHome)
router.patch('/homes/:idHome', homeController.updateOneHome)
router.delete('/homes/:idHome', homeController.SoftDeleteOneHome)
router.delete('/homes/destroy/:idHome', homeController.destroyOneHome)

module.exports = router
