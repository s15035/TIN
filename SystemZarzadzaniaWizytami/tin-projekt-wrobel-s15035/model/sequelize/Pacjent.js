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
        allowNull: false,
        validate:{
            notEmpty:{
                msg: "Pole jest wymagane"
            },
            len: {
                args: [2,60],
                msg: "Polew powinno zawiera� od 2 do 60 znak�w"
            },
        }
    },
    nazwisko: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg: "Pole jest wymagane"
            },
            len: {
                args: [2,60],
                msg: "Polew powinno zawiera� od 2 do 60 znak�w"
            },
        }
    },
    pesel: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate:{
            notEmpty:{
                msg: "Pole jest wymagane"
            },
            len: {
                args: [11,11],
                msg: "Polew powinno zawiera� 11 cyfr"
            },
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args: [5,60],
                msg: "Pole powinno zawiera� od 5 do 60 znak�w"
            },
            isEmail: {
                msg: 'Pole powinno zawiera� prawid�owy adres email'
            }
        }
    },
    telefon: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg: "Pole jest wymagane"
            },
            len: {
                args: [9,9],
                msg: "Polew powinno zawiera� 9 znak�w"
            },
        }
    },
    kod_pocztowy: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg: "Pole jest wymagane"
            },
            len: {
                args: [6,6],
                msg: "Polew powinno zawiera� 6 znak�w"
            },
        }
    },
    miasto: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg: "Pole jest wymagane"
            },
            len: {
                args: [2,60],
                msg: "Polew powinno zawiera� od 2 do 60 znak�w"
            },
        }
    },
    ulica: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg: "Pole jest wymagane"
            },
            len: {
                args: [2,60],
                msg: "Polew powinno zawiera� od 2 do 60 znak�w"
            },
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg: "Pole jest wymagane"
            },
            len: {
                args: [8,25],
                msg: "Polew powinno zawiera� od 8 do 25 znak�w"
            },
        }
    }
});

module.exports = Pacjent;