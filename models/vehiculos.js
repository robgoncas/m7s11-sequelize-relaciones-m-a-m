'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vehiculos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Vehiculos.belongsToMany(models.Ventas, {
        through: 'VentasVehiculos',
        foreignKey: 'id_vehiculo',
        otherKey: 'id_ventas',
        as:'Ventas'
        });

    }
  }
  Vehiculos.init({
    modelo: DataTypes.STRING,
    marca: DataTypes.STRING,
    anio: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Vehiculos',
  });
  return Vehiculos;
};