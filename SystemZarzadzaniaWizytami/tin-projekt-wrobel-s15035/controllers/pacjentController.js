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
        formAction: '/patient/add',
        navLocation: 'pacjent'
    });
}

exports.showEditPacjentForm = (req, res, next) => {
    const pacjentId = req.params.pacjentId;
    PacjentRepository.getPacjentById(pacjentId)
        .then(pacjent => {
            res.render('pages/pacjent/form', {
                pacjent: pacjent,
                formMode: 'edit',
                pageTitle: 'Edycja pacjenta',
                btnLabel: 'Edytuj pacjenta',
                formAction: '/patient/edit',
                navLocation: 'pacjent'
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

/*register/add nie wywala bledów ale tez nie dodaje rekordow do bazy*/

exports.registerPacjent = (req, res, next) => {
    const pacjentData = { ...req.body };
    PacjentRepository.createPacjent(pacjentData)
        .then(result => {
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
                validationErrors: err.details
            });
        });
};


/*update nie wywala bledów ale tez nie dodaje rekordow do bazy*/
exports.updatePacjent = (req, res, next) => {
    const pacjentId = req.body._id;
    const pacjentData = { ...req.body };
    PacjentRepository.updatePacjent(pacjentId, pacjentData)
        .then(result => {
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
                validationErrors: err.details
            });
        });
};

exports.deletePacjent = (req, res, next) => {
    const pacjentId = req.params.pacjentId;
    PacjentRepository.deletePacjent(pacjentId)
        .then(() => {
            res.redirect('/patient');
        });
};