const tutorController = require('../controllers/tutorController.js')

const router = require('express').Router()

router.post('/addTutor', tutorController.addTutor)

router.get('/getAllOverTutors', tutorController.getAllOverTutors)

router.get('/getAllTutors', tutorController.getAllTutors)

router.delete('/:id', tutorController.deleteTutor)

router.put('/:id', tutorController.updateTutor)

router.get('/:id', tutorController.getSingleTutor)

module.exports = router