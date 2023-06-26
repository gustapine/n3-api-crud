const db = require('../models')
const _ = require('lodash')
const Pet = db.Pet
const Altura = db.Altura
const Tutor = db.Tutor

//1. Cria Pet novo

const addPet = async (req, res) => {
    let alt = req.body.altura

    if (alt <= 15 ) {
        var Altura = 1
    } else if(alt > 15 && alt < 45) {
        var Altura = 2
    }else{
        var Altura = 3
    }

    let info = {
        nome_pet: req.body.nome_pet,
        genero_pet: req.body.genero_pet,
        tutor: req.body.tutor,
        altura: Altura
    }

    const pet = await Pet.create(info)
    res.status(200).send(pet)
    console.log(pet)
}

//get all pets

const getAllPets = async (req, res) => {

    let pets = await Pet.findAll({
        attributes: [
            'nome_pet',
            'altura'  //vai trazer só essas duas informações
        ]
    })
    res.status(200).send(pets)
    console.log(pets)
}

const searchPetsByTutor = async (req, res) => {
    try {
      const tutorName = req.params.nome;
  
      const pets = await Pet.findAll({
        attributes: ['nome_pet', 'genero_pet', 'altura'],
        include: [{
          model: Tutor,
          as: 'tutors',
          attributes: [] 
        }],
        where: {
          '$tutors.nome$': tutorName
        }
      });
      console.log(pets);
      res.status(200).send(pets);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  const searchPetsByAltura = async (req, res) => {
    try {
        let alt = req.params.altura
      
        if (alt === 'pequeno') {
            var Alt = 1
        } else if(alt === 'medio' || alt === 'media') {
            var Alt = 2
        }else if(alt === 'alta' || alt === 'alto'){
            var Alt = 3
        }else{
            console.log('valor indefinido')
        }
  
        const pets = await Pet.findAll({
          attributes: ['nome_pet', 'genero_pet', 'altura'],
          where: {
            altura: Alt 
          }
        });

      console.log(pets);
      res.status(200).send(pets);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


const getAllOverPets = async (req, res) => {

    let pets = await Pet.findAll()
    res.status(200).send(pets)
    console.log(pets)
}

const getSinglePet = async (req, res) => {

    let id = req.params.id
    let pet = await Pet.findOne({ where: { cod_pet: id } })
    res.status(200).send(pet)
}

//4.update

const updatePetbyId = async (req, res) => {
    
    let id = req.params.id
    const pet = await Pet.update(req.body, { where: { cod_pet: id } })
    res.status(200).send(pet)
}

const updatePet = async (req, res) => {

  let alt = req.body.altura

  if (alt <= 15 ) {
      var Altura = 1
  } else if(alt > 15 && alt < 45) {
      var Altura = 2
  }else{
      var Altura = 3
  }

  let info = {
      nome_pet: req.body.nome_pet,
      genero_pet: req.body.genero_pet,
      tutor: req.body.tutor,
      altura: Altura
  }
    
    let id = req.params.id
    const pet = await Pet.update(info, {where:{ cod_pet: id }})
    res.status(200).send(pet)
}

//5.delete por id

const deletePet = async (req, res) => {

    let id = req.params.id
    await Pet.destroy({ where: {  cod_pet: id } })
    res.status(200).send('O Pet foi excluido')
}

module.exports = {
    addPet,
    getAllPets,
    getSinglePet,
    updatePet,
    deletePet,
    getAllOverPets,
    searchPetsByTutor,
    searchPetsByAltura,
    updatePetbyId
}