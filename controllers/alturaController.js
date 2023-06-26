const db = require('../models')

const Pet = db.Pet
const Altura = db.Altura
const Tutor = db.Tutor


const getAllAlturas = async (req, res) => {

    let altura = await Altura.findAll()
    res.status(200).send(altura)
    console.log(altura)
}

module.exports = {
    getAllAlturas
}