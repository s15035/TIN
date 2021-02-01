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
    specjalizacja: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg: "Pole jest wymagane"
            },
            len: {
                args: [2,60],
                msg: "Polew powinno zawieraæ od 5 do 60 znaków"
            },
        }
    },
    oddzial: {
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
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = Lekarz;