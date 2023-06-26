const alturaController = require('../controllers/alturaController.js')
const router = require('express').Router()


router.get('/getAllAlturas', alturaController.getAllAlturas)

module.exports = router