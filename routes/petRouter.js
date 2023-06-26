const petController = require('../controllers/petController.js')

const router = require('express').Router()

router.post('/addPet', petController.addPet)

router.get('/getAllOverPets', petController.getAllOverPets)

router.get('/getAllPets', petController.getAllPets)

router.delete('/:id', petController.deletePet)

router.put('/update/:id', petController.updatePet)
router.put('/:id', petController.updatePetbyId)

router.get('/:id', petController.getSinglePet)

router.get('/nomeTutor/:nome', petController.searchPetsByTutor)

router.get('/altura/:altura', petController.searchPetsByAltura)

module.exports = router