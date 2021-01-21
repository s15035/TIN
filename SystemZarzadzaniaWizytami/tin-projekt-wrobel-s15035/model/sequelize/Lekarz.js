const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Lekarz = sequelize.define('Lekarz', {
    id_lekarz: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    imie: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nazwisko: {
        type: Sequelize.STRING,
        allowNull: false
    },
    specjalizacja: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    oddzial: {
        type: Sequelize.STRING,
        allowNull: false,
    },
     email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    haslo: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = Lekarz;