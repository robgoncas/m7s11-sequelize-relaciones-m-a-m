'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('VentaVehiculos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_vehiculo: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Vehiculos',
          key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
      id_venta: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Ventas',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('VentaVehiculos');
  }
};