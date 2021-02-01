const Lekarz = require("../../model/sequelize/Lekarz");
const Pacjent = require("../../model/sequelize/Pacjent");
const Wizyta = require("../../model/sequelize/Wizyta");

const authUtil = require('../../util/authUtils');

exports.getLekarz = () => {
    return Lekarz.findAll();
};

exports.getLekarzById = (lekarzId) => {
    return Lekarz.findByPk(lekarzId,
        {
            include: [{
                model: Wizyta,
                as: 'wizyta',
                include: [{
                    model: Pacjent,
                    as: 'pacjent'
                }]
            }]
        });
};

exports.createLekarz = (newLekarzData) => {
    newLekarzData.haslo = authUtil.hashPassword(newLekarzData.haslo);
    return Lekarz.create({
        imie: newLekarzData.imie,
        nazwisko: newLekarzData.nazwisko,
        tytul: newLekarzData.tytul,
        specjalizacja: newLekarzData.specjalizacja,
        oddzial: newLekarzData.oddzial,
        email: newLekarzData.email,
        haslo: newLekarzData.haslo
    });
};

exports.updateLekarz = (lekarzId, lekarzData) => {
    lekarzData.haslo = authUtil.hashPassword(lekarzData.haslo);
    const imie = lekarzData.imie;
    const nazwisko = lekarzData.nazwisko;
    const tytul = lekarzData.tytul;
    const specjalizacja = lekarzData.specjalizacja;
    const oddzial = lekarzData.oddzial;
    const email = lekarzData.email;
    const haslo = lekarzData.haslo;

    return Lekarz.update(lekarzData, { where: { id_lekarz: lekarzId } });
};

exports.deleteLekarz = (lekarzId) => {
    return Lekarz.destroy({
        where: { id_lekarz: lekarzId }
    });

};

exports.findByEmail = (email) => {
    return Lekarz.findOne({
        where: {email: email}
    });
}