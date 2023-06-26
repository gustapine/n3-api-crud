const db = require('../models')

const Pet = db.Pet
const Altura = db.Altura
const Tutor = db.Tutor

//1. Cria Pet novo

const addTutor = async (req, res) => {

    let info = {
        nome: req.body.nome,
        email: req.body.email,
        cpf: req.body.cpf,
        senha: req.body.senha
    }

    const tutor = await Tutor.create(info)
    res.status(200).send(tutor)
    console.log(tutor)
}

//get all pets

const getAllTutors = async (req, res) => {

    let tutor = await Tutor.findAll({
        attributes: [
            'nome',
            'email',
            'cpf',
            'senha'  //vai trazer só essas duas informações
        ]
    })
    res.status(200).send(tutor)
    console.log(tutor)
}


const getAllOverTutors = async (req, res) => {

    let tutor = await Tutor.findAll()
    res.status(200).send(tutor)
    console.log(tutor)
}

//3. get a single pet

const getSingleTutor = async (req, res) => {

    let id = req.params.id
    let tutor = await Tutor.findOne({ where: { id: id } })
    res.status(200).send(tutor)
}

//4.update

const updateTutor = async (req, res) => {

    let id = req.params.id
    const tutor = await Tutor.update(req.body, { where: { id: id } })
    res.status(200).send(tutor)
}

//5.delete por id

const deleteTutor = async (req, res) => {

    let id = req.params.id
    await Tutor.destroy({ where: {  id: id } })
    res.status(200).send('O tutor foi excluido')
}

module.exports = {
    addTutor,
    getAllTutors,
    getSingleTutor,
    updateTutor,
    deleteTutor,
    getAllOverTutors
}