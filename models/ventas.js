'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ventas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ventas.belongsToMany(models.Vehiculo, {
        through: 'VentasVehiculos',
        foreignKey: 'id_venta',
        otherKey: 'id_vehiculo',
        as:'Vehiculos'
        });

    }
  }
  Ventas.init({
    descripcion: DataTypes.STRING,
    fecha_venta: DataTypes.DATE,
    total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ventas',
  });
  return Ventas;
};