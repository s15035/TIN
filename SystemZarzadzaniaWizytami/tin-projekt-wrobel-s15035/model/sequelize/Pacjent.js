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
                msg: "Polew powinno zawieraæ od 2 do 60 znaków"
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
                msg: "Polew powinno zawieraæ od 2 do 60 znaków"
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
                msg: "Polew powinno zawieraæ 11 cyfr"
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
                msg: "Pole powinno zawieraæ od 5 do 60 znaków"
            },
            isEmail: {
                msg: 'Pole powinno zawieraæ prawid³owy adres email'
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
                msg: "Polew powinno zawieraæ 9 znaków"
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
                msg: "Polew powinno zawieraæ 6 znaków"
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
                msg: "Polew powinno zawieraæ od 2 do 60 znaków"
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
                msg: "Polew powinno zawieraæ od 2 do 60 znaków"
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
                msg: "Polew powinno zawieraæ od 8 do 25 znaków"
            },
        }
    }
});

module.exports = Pacjent;