module.exports = (sequelize, DataTypes) => {

    const Pet = sequelize.define('pet', {
        cod_pet: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nome_pet:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        genero_pet: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        tutor: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        altura: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })

    return Pet;
}