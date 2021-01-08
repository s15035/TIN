const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Cart = sequelize.define('Cart', {
    id_cart: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    created: {
        type: Sequelize.DATE,
        allowNull: false
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    price: {
        type: Sequelize.DECIMAL(8, 2),
        allowNull: false
    },
    id_product: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_order: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Cart;