'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VentaVehiculos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  VentaVehiculos.init({
    id_vehiculo: DataTypes.INTEGER,
    id_venta: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'VentaVehiculos',
  });
  return VentaVehiculos;
};