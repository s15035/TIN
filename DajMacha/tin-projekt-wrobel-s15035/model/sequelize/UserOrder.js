const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const UserOrder = sequelize.define('UserOrder', {
    id_order: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    order_value: {
        type: Sequelize.DECIMAL(8,2),
        allowNull: false
    },
    order_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    id_order_status: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_user: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = UserOrder;