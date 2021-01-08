const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Product = sequelize.define('Product', {
    id_product: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    product: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DECIMAL(8,2),
        allowNull: false
    },
    details: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

module.exports = Product;