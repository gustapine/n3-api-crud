
module.exports = (sequelize, DataTypes) => {

    const Tutor = sequelize.define('tutor', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nome:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        cpf: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        senha: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    })

    return Tutor;
}