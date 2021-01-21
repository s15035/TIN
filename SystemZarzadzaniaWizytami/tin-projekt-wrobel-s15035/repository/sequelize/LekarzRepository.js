const Lekarz = require("../../model/sequelize/Lekarz");
const Pacjent = require("../../model/sequelize/Pacjent");
const Wizyta = require("../../model/sequelize/Wizyta");

exports.getLekarz = () => {
    return Lekarz.findAll();
};

exports.getLekarzById = (lekarzId) => {
    return Lekarz.findByPk(lekarzId);
};

exports.createLekarz = (newLekarzData) => {
    return Lekarz.create({
        imie: newLekarzData.imie,
        nazwisko: newLekarzData.nazwisko,
        specjalizacja: newLekarzData.specjalizacja,
        oddzial: newLekarzData.oddzial,
        email: newLekarzData.email,
        haslo: newLekarzData.haslo
    });
};

exports.updateLekarz = (lekarzId, lekarzData) => {
    const imie = lekarzData.imie;
    const nazwisko = lekarzData.nazwisko;
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