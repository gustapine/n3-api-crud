
module.exports = (sequelize, DataTypes) => {

    const altura = sequelize.define('altura', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        altura:{
            type: DataTypes.TEXT,
            allowNull: false
        }
    })

    return altura;
}