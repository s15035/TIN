const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Pacjent = sequelize.define('Pacjent', {
    id_pacjent: {
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
    pesel: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    telefon: {
        type: Sequelize.STRING,
        allowNull: false
    },
    kod_pocztowy: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    miasto: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    ulica: {
        type: Sequelize.STRING,
        allowNull: false
    },
    haslo: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = Pacjent;