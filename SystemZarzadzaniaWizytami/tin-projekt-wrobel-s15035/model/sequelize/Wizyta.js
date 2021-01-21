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
        allowNull: false
    },
    id_lekarz: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    objawy: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    leczenie: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    data_wizyty: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    }
});

module.exports = Wizyta;