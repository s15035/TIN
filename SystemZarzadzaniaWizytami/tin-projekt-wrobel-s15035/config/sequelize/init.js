const sequelize = require('./sequelize');

const Lekarz = require('../../model/sequelize/Lekarz');
const Pacjent = require('../../model/sequelize/Pacjent');
const Wizyta = require('../../model/sequelize/Wizyta');

const authUtil = require('../../util/authUtils');
const passHash = authUtil.hashPassword('1Tescik123');

module.exports = () => {
    Lekarz.hasMany(Wizyta, { as: 'wizyta', foreignKey: { name: 'id_lekarz', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    Wizyta.belongsTo(Lekarz, { as: 'lekarz', foreignKey: { name: 'id_lekarz', allowNull: false } });
    Pacjent.hasMany(Wizyta, { as: 'wizyta', foreignKey: { name: 'id_pacjent', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    Wizyta.belongsTo(Pacjent, { as: 'pacjent', foreignKey: { name: 'id_pacjent', allowNull: false } });

    let allLekarz, allPacjent;
    return sequelize
        .sync({ force: false })
        .then(() => {
            return Pacjent.findAll();
        })
        .then(pacjent => {
            if (!pacjent || pacjent.length == 0) {
                return Pacjent.bulkCreate([
                    { imie: 'Jan', nazwisko: 'Kowalski', pesel: '97001100987', email: 'jan.kowalski@acme.com', telefon: '111222333', kod_pocztowy: '01-010', miasto: 'Warszawa', ulica: 'Wesola', haslo: '1Test123OMG' },
                    { imie: 'Wiktor', nazwisko: 'Wrobel', pesel: '87001100987', email: 'wiktor.wrobel@acme.com', telefon: '211222333', kod_pocztowy: '01-010', miasto: 'Warszawa', ulica: 'Jasna 12/2', haslo: '2Test123OMG' },
                    { imie: 'Alina', nazwisko: 'Malina', pesel: '77001100987', email: 'alina.malina@acme.com', telefon: '311222333', kod_pocztowy: '01-230', miasto: 'Radom', ulica: 'Dziwna 13/2', haslo: '3Test123OMG' }
                ])
                    .then(() => {
                        return Pacjent.findAll();
                    });
            } else {
                return pacjent;
            }
        })
        .then(pacjent => {
            allPacjent = pacjent;
            return Lekarz.findAll();
        })
        .then(lekarz => {
            if (!lekarz || lekarz.length == 0) {
                return Lekarz.bulkCreate([
                    { imie: 'Mateusz', nazwisko: 'Tylko', specjalizacja: 'Internista-Kardiolog', oddzial: 'Kardiologiczny', email: 'mateusz.doktor@example.com', haslo: passHash },
                    { imie: 'Olga', nazwisko: 'Kowalska', specjalizacja: 'Ortopeda', oddzial: 'Chirurgia Urazowo-Ortopedyczna', email: 'olga.doktor@example.com', haslo: passHash },
                    { imie: 'Anna', nazwisko: 'Jakas', specjalizacja: 'Pediatra', oddzial: 'Pediatryczny', email: 'anna.doktor@example.com', haslo: passHash }
                ])
                    .then(() => {
                        return Lekarz.findAll();
                    });
            } else {
                return lekarz;
            }
        })
        .then(lekarz => {
            allLekarz = lekarz;
            return Wizyta.findAll();
        })
        .then(wizyta => {
            if (!wizyta || wizyta.length == 0) {
                return Wizyta.bulkCreate([
                    { id_lekarz: allLekarz[0].id_lekarz, id_pacjent: allPacjent[0].id_pacjent, objawy: 'ból g³owy, nudnoœci', leczenie: 'Tabs BCS + duzo wody', data_wizyty: '2021-01-01' },
                    { id_lekarz: allLekarz[1].id_lekarz, id_pacjent: allPacjent[0].id_pacjent, objawy: 's³abe koœci, sennoœæ', leczenie: 'Nie wiem nie znam sie', data_wizyty: '2021-01-03' },
                    { id_lekarz: allLekarz[0].id_lekarz, id_pacjent: allPacjent[1].id_pacjent, objawy: 'ból zêba, s³aby wzrok', leczenie: 'Wyrwanie polowy wszystkich zebow', data_wizyty: '2021-01-07' }
                ]);
            } else {
                return wizyta;
            }
        });
};