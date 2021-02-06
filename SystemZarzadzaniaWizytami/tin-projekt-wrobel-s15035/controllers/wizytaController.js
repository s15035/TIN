let alert = require('alert');

const PacjentRepository = require('../repository/sequelize/PacjentRepository');
const LekarzRepository = require('../repository/sequelize/LekarzRepository');
const WizytaRepository = require('../repository/sequelize/WizytaRepository');

exports.showWizytaList = (req, res, next) => {
    WizytaRepository.getWizyta()
        .then(wizyty => {
            res.render('pages/wizyta/list', {
                wizyty: wizyty,
                navLocation: 'wizyta'
            });
        });
}

exports.showWizytaDetails = (req, res, next) => {
    const wizytaId = req.params.wizId;
    let allWizyta, allPacjent;
    WizytaRepository.getWizytaById(wizytaId)
        .then(wizyta=> {
            allWizyta = wizyta;
            res.render('pages/wizyta/form', {
                allPacjent: allPacjent,
                allWizyta: allWizyta,
                wizyta: wizyta,
                formMode: 'showDetails',
                pageTitle: 'Szczegó³y wizyty',
                formAction: '',
                navLocation: 'wizyta',
                validationErrors: []
            });
        });
}

exports.showAddWizytaForm = (req, res, next) => {
    let allPacjent, allLekarz;
    PacjentRepository.getPacjent()
        .then(pacjenci => {
            allPacjent = pacjenci;
            return LekarzRepository.getLekarz();
        })
        .then(lekarz => {
            allLekarz = lekarz;
            res.render('pages/wizyta/form', {
                wizyta: {},
                formMode: 'createNew',
                allPacjent: allPacjent,
                allLekarz: allLekarz,
                pageTitle: 'Nowa wizyta',
                btnLabel: 'Dodaj wizyte',
                formAction: '/appointment/add',
                navLocation: 'wizyta',
                validationErrors: []
            });
        });
}

exports.showWizytaEdit = (req, res, next) => {
    const wizytaId = req.params.wizId;
    let allPacjent, allLekarz;
    PacjentRepository.getPacjent()
        .then(pacjenci => {
            allPacjent = pacjenci;
            return LekarzRepository.getLekarz();
        })
        .then(lekarz => {
            allLekarz = lekarz;
            return WizytaRepository.getWizytaById(wizytaId)
        })
        .then(wizyta => {
            res.render('pages/wizyta/form', {
                wizyta: wizyta,
                allPacjent: allPacjent,
                allLekarz: allLekarz,
                formMode: 'edit',
                pageTitle: 'Edycja wizyty',
                formAction: '/appointment/edit',
                navLocation: 'wizyta',
                btnLabel: 'PotwierdŸ wizyte',
                validationErrors: []
            });
        });
};

/*---------------------------------------------*/

exports.addWizyta = (req, res, next) => {
    const wizytaData = { ...req.body };
    WizytaRepository.createWizyta(wizytaData)
        .then( result => {
            alert('Dodano wizyte')
            res.redirect('/appointment');
        }).catch(err => {
        let allPacjent;
        let allLekarz;
        PacjentRepository.getPacjent()
            .then(pacjenci => {
                allPacjent = pacjenci;
                return LekarzRepository.getLekarz();
            }).then(lekarz =>{
            allLekarz = lekarz
            console.log(JSON.stringify(wizytaData,null,2))

            res.render('pages/wizyta/form', {
                allPacjent: allPacjent,
                allLekarz : allLekarz,
                wizyta: wizytaData,
                pageTitle: 'Dodawanie wizyty',
                formMode: 'createNew',
                btnLabel: 'Dodaj wizyte',
                formAction: '/appointment/add',
                navLocation: 'wizyta',
                validationErrors: err.errors
            })
        });
    });
};

exports.updateWizyta = (req, res, next) => {
    const wizytaId = req.body.id_wizyta;
    const wizytaData = { ...req.body };
    WizytaRepository.updateWizyta(wizytaId, wizytaData)
        .then(result => {
            alert('Zaktualizowano wizyte')
            res.redirect('/appointment');
        }).catch(err => {
            res.render('pages/wizyta/form', {
                wizyta: wizytaData,
                pageTitle: 'Edycja wizyty',
                formMode: 'edit',
                btnLabel: 'Edytuj wizyte',
                formAction: '/appointment/edit',
                navLocation: 'wizyta',
                validationErrors: err.errors
            });
        });
};

exports.deleteWizyta = (req, res, next) => {
    const wizytaId = req.params.wizId;
    WizytaRepository.deleteWizyta(wizytaId)
        .then(() => {
            alert('Usuniêto wizyte')
            res.redirect('/appointment');
        });
};