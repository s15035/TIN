const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const OrderStatus = sequelize.define('OrderStatus', {
    id_order_status: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
});

module.exports = OrderStatus;