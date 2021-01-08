const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const UserRole = sequelize.define('UserRole', {
    id_user_role: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user_role: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = UserRole;