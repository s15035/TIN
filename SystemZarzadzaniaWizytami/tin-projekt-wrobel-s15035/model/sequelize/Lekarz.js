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
    specjalizacja: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg: "Pole jest wymagane"
            },
            len: {
                args: [2,60],
                msg: "Polew powinno zawiera� od 5 do 60 znak�w"
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
                msg: "Polew powinno zawiera� od 2 do 60 znak�w"
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
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = Lekarz;