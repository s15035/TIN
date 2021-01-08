const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const WebUser = sequelize.define('WenUser', {
    id_user: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    tel: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
    },
    street: {
        type: Sequelize.STRING,
        allowNull: true
    },
    postcode: {
        type: Sequelize.STRING,
        allowNull: true
    },
    city: {
        type: Sequelize.STRING,
        allowNull: true
    },
    login: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user_password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    id_user_role: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

module.exports = WebUser;