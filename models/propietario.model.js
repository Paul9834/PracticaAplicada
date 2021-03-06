var DataTypes = require('sequelize/lib/data-types');

module.exports = (sequelize, Sequelize) => {

    const Propietario = sequelize.define(
        "Propietario",
        {
            idPropietario: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                unique: true,
                autoIncrement: true,
                allowNull: false
            },
            nombrePropietario: {
                type: DataTypes.STRING,
                allowNull: false
            },
            fechaRegistro: {
                type: DataTypes.DATE(0),
                allowNull: false
            },
            fotoPerfil: {
                type: DataTypes.STRING,
                //allowNull: false
            },
            email:{
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            usuario:{
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            pass:{
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            tableName: "propietarios",
            timestamps: false
        }
    );
        return Propietario;
}