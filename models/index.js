const db = require('../config/dbConfig.js');

const { Sequelize, DataTypes } = require('sequelize'); 7

const sequelize = new Sequelize(
    db.DB,
    db.USER,
    db.PASSWORD, {
    host: db.HOST,
    dialect: db.dialect,
    operatorAliases: false,


    pool: {
        max: db.pool.max,
        min: db.pool.min,
        acquire: db.pool.acquire,
        idle: db.pool.idle
    }
}
)

sequelize.authenticate()
    .then(() => {
        console.log('conectado...')
    })
    .catch(err => {
        console.log('Error ' + err)
    })

const database = {}

database.Sequelize = Sequelize
database.sequelize = sequelize

database.Tutor = require('./tutorModel.js')(sequelize, DataTypes)
database.Pet = require('./petModel.js')(sequelize, DataTypes)
database.Altura = require('./alturaModel.js')(sequelize, DataTypes)

database.sequelize.sync({ force: false })
    .then(() => {
        console.log('ressincronização realizada')
    })

    database.Pet.belongsTo(database.Tutor, {
        foreignKey: 'tutor',
        as: 'tutors'
    });
    
    database.Pet.belongsTo(database.Altura, {
        foreignKey: 'altura',
        as: 'alturas'
    });

module.exports = database