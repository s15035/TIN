const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Wizyta = sequelize.define('Wizyta', {
    id_wizyta: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    id_pacjent: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate:{
            notEmpty:{
                msg: "Pole jest wymagane"
            },
        }
    },
    id_lekarz: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate:{
            notEmpty:{
                msg: "Pole jest wymagane"
            },
        }
    },
    objawy: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg: "Pole jest wymagane"
            },
        }
    },
    leczenie: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg: "Pole jest wymagane"
            },
            len: {
                args: [10,1000],
                msg: "Polew powinno zawieraæ od 10 do 1000 znaków"
            },
        }
    },
    data_wizyty: {
        type: Sequelize.DATE,
        allowNull: false,
        validate:{
            notEmpty:{
                msg: "Pole jest wymagane"
            },
        }
    }
});

module.exports = Wizyta;