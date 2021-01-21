const Lekarz = require("../../model/sequelize/Lekarz");
const Pacjent = require("../../model/sequelize/Pacjent");
const Wizyta = require("../../model/sequelize/Wizyta");

exports.getPacjent = () => {
    return Pacjent.findAll();
};

exports.getPacjentById = (pacjentId) => {
    return Pacjent.findByPk(pacjentId);
};

exports.createPacjent = (newPacjentData) => {
    return Pacjent.create({
        imie: newPacjentData.imie,
        nazwisko: newPacjentData.nazwisko,
        pesel: newPacjentData.pesel,
        email: newPacjentData.email,
        telefon: newPacjentData.telefon,
        kod_pocztowy: newPacjentData.kod_pocztowy,
        miasto: newPacjentData.miasto,
        ulica: newPacjentData.ulica,
        haslo: newPacjentData.haslo
    });
};

exports.updatePacjent = (pacjentId, pacjentData) => {
   /* const imie = pacjentData.imie;
    const nazwisko = pacjentData.nazwisko;
    const pesel = pacjentData.specjalizacja; */
    const email = pacjentData.oddzial;
    const telefon = pacjentData.email;
    const kod_pocztowy = pacjentData.haslo;
    const miasto = pacjentData.oddzial;
    const ulica = pacjentData.email;
    const haslo = pacjentData.haslo;
    return Pacjent.update(pacjentData, { where: { id_pacjent: pacjentId } });
};

exports.deletePacjent = (pacjentId) => {
    return Pacjent.destroy({
        where: { id_pacjent: pacjentId }
    });

}; 