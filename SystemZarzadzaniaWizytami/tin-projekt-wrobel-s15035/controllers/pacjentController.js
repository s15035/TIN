let alert = require('alert');

const PacjentRepository = require('../repository/sequelize/PacjentRepository');

exports.showLoginForm = (req, res, next) => {
    res.render('pages/pacjent/login', { navLocation: 'pacjent' });
}

exports.showPacjentList = (req, res, next) => {
    PacjentRepository.getPacjent()
        .then(pacjenci => {
            res.render('pages/pacjent/list', {
                pacjenci: pacjenci,
                navLocation: 'pacjent'
            });
        });
}

exports.showRegisterForm = (req, res, next) => {
    res.render('pages/pacjent/register', {
        pacjent: {},
        pageTitle: 'Formularz rejestracyjny',
        formMode: 'createNew',
        btnLabel: 'Utworz konto',
        formAction: '/patient/register',
        navLocation: 'pacjent',
        validationErrors: []
    });
}

exports.showAddPacjentForm = (req, res, next) => {
    res.render('pages/pacjent/form', {
        pacjent: {},
        pageTitle: 'Dodawanie pacjenta',
        formMode: 'createNew',
        btnLabel: 'Dodaj pacjenta',
        formAction: '/patient/add',
        navLocation: 'pacjent',
        validationErrors: []
    });
}

exports.showEditPacjentForm = (req, res, next) => {
    const pacjentId = req.params.pacId;
    PacjentRepository.getPacjentById(pacjentId)
        .then(pacjent => {
            res.render('pages/pacjent/form', {
                pacjent: pacjent,
                formMode: 'edit',
                pageTitle: 'Edycja pacjenta',
                btnLabel: 'Edytuj pacjenta',
                formAction: '/patient/edit',
                navLocation: 'pacjent',
                validationErrors: []
            });
        });
};

exports.showPacjentDetails = (req, res, next) => {
    const PacjentId = req.params.pacId;
    PacjentRepository.getPacjentById(PacjentId)
        .then(pacjent => {
            res.render('pages/pacjent/form', {
                pacjent: pacjent,
                formMode: 'showDetails',
                pageTitle: 'Szczegoly pacjenta',
                formAction: '',
                navLocation: 'pacjent',
                validationErrors: []
            });
        });
}
/*------------------------------------------*/

/*register/add nie wywala bled�w ale tez nie dodaje rekordow do bazy*/

exports.registerPacjent = (req, res, next) => {
    const pacjentData = { ...req.body };
    PacjentRepository.createPacjent(pacjentData)
        .then(result => {
            alert('Zarejestrowano pacjenta')
            res.redirect('/patient');
        })
        .catch(err => {
            res.render('pages/pacjent/register', {
                pacjent: pacjentData,
                pageTitle: 'Formularz rejestracyjny',
                formMode: 'createNew',
                btnLabel: 'Utworz konto',
                formAction: '/patient/register',
                navLocation: 'pacjent',
                validationErrors: err.errors
            });
        });
};

exports.addPacjent = (req, res, next) => {
    const pacjentData = { ...req.body };
    PacjentRepository.createPacjent(pacjentData)
        .then(result => {
            alert('Dodano pacjenta')
            res.redirect('/patient');
        })
        .catch(err => {
            res.render('pages/pacjent/form', {
                pacjent: pacjentData,
                pageTitle: 'Dodawanie pacjenta',
                formMode: 'createNew',
                btnLabel: 'Dodaj pacjenta',
                formAction: '/patient/add',
                navLocation: 'pacjent',
                validationErrors: err.errors
            });
        });
};


exports.updatePacjent = (req, res, next) => {
    const pacjentId = req.body.id_pacjent;
    const pacjentData = { ...req.body };
    PacjentRepository.updatePacjent(pacjentId, pacjentData)
        .then(result => {
            alert('Zaktualizowano dane pacjenta')
            res.redirect('/patient');
        })
        .catch(err => {
            res.render('pages/pacjent/form', {
                pacjent: pacjentData,
                pageTitle: 'Edycja pacjenta',
                formMode: 'edit',
                btnLabel: 'Edytuj pacjenta',
                formAction: '/patient/edit',
                navLocation: 'pacjent',
                validationErrors: err.errors
            });
        });
};

exports.deletePacjent = (req, res, next) => {
    const pacjentId = req.params.pacId;
    PacjentRepository.deletePacjent(pacjentId)
        .then(() => {
            alert('Usuni�to pacjenta')
            res.redirect('/patient');
        });
};