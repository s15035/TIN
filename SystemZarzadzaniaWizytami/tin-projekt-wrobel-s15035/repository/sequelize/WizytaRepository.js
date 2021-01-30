const Lekarz = require("../../model/sequelize/Lekarz");
const Pacjent = require("../../model/sequelize/Pacjent");
const Wizyta = require("../../model/sequelize/Wizyta");

const Sequelize = require('sequelize');

exports.getWizyta = () => {
    return Wizyta.findAll({include: [
            {
                model: Lekarz,
                as: 'lekarz'
            },
            {
                model: Pacjent,
                as: 'pacjent'
            }]
    });
};

exports.getWizytaById = (wizytaId) => {
    return Wizyta.findByPk(wizytaId, {include: [
            {
                model: Lekarz,
                as: 'lekarz'
            },
            {
                model: Pacjent,
                as: 'pacjent'
            }]
    });
};

exports.createWizyta = (data) => {

    return Wizyta.create({
        id_lekarz: data.id_lekarz,
        id_pacjent: data.id_pacjent,
        objawy: data.objawy,
        leczenie: data.leczenie,
        data_wizyty: data.data_wizyty
    });
};

exports.updateWizyta = (wizytaId, data) => {
    const id_pacjent = data.id_pacjent;
    const id_lekarz = data.id_lekarz;
    const objawy = data.objawy;
    const leczenie = data.leczenie;
    const data_wizyty = data.data_wizyty;

    return Wizyta.update(data, { where: { id_wizyta: wizytaId }
    });
}

exports.deleteWizyta = (wizytaId) => {
    return Wizyta.destroy({
        where: { id_wizyta: wizytaId }
    });
};

exports.deleteManyWizyta= (wizytaIds) => {
    return Wizyta.find({ id_wizyta: { [Sequelize.Op.in]: wizytaIds }})
}