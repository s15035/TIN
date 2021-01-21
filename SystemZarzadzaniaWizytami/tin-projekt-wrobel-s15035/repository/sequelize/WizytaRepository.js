const Lekarz = require("../../model/sequelize/Lekarz");
const Pacjent = require("../../model/sequelize/Pacjent");
const Wizyta = require("../../model/sequelize/Wizyta");

exports.getWizyta = () => {
    return Wizyta.findAll({
        include: [
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
    return Wizyta.findByPk(wizytaId, {
        include: [
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
    console.log(JSON.stringify(data));

    return Wizyta.create({
        id_lekarz: data.id_lekarz,
        id_pacjent: data.id_pacjent,
        objawy: data.objawy,
        leczenie: data.leczenie,
        data_wizyty: data.data_wizyty
    });
};

exports.updateWizyta = (wizytaId, data) => {
    return Wizyta.update(data, { where: { id_wizyta: wizytaId } });
}

exports.deleteWizyta = (wizytaId) => {
    return Wizyta.destroy({
        where: { id_wizyta: wizytaId }
    });

}; 