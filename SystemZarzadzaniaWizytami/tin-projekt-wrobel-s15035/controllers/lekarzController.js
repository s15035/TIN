const LekarzRepository = require('../repository/sequelize/LekarzRepository');

exports.showLoginForm = (req, res, next) => {
    res.render('pages/lekarz/login', { navLocation: 'lekarz'});
}

exports.showLekarzList = (req, res, next) => {
    LekarzRepository.getLekarz()
        .then(lekarze => {
            res.render('pages/lekarz/list', {
                lekarze: lekarze,
                navLocation: 'lekarz'
            });
        });
}

exports.showAddLekarzForm = (req, res, next) => {
    res.render('pages/lekarz/form', {
        lekarz: {},
        pageTitle: 'Nowy lekarz',
        formMode: 'createNew',
        btnLabel: 'Dodaj lekarza',
        formAction: '/doctor/add',
        navLocation: 'lekarz',
        validationErrors: []
    });
}

exports.showEditLekarzForm = (req, res, next) => {
    const LekarzId = req.params.lekId;
    LekarzRepository.getLekarzById(LekarzId)
        .then(lekarz => {
            res.render('pages/lekarz/form', {
                lekarz: lekarz,
                formMode: 'edit',
                pageTitle: 'Edycja lekarza',
                btnLabel: 'Edytuj lekarza',
                formAction: '/doctor/edit',
                navLocation: 'lekarz',
                validationErrors: []
            });
        });
};

exports.showLekarzDetails = (req, res, next) => {
    const lekarzId = req.params.lekId;
    console.log(lekarzId);
    LekarzRepository.getLekarzById(lekarzId)
        .then(lekarz => {
            res.render('pages/lekarz/form', {
                lekarz: lekarz,
                formMode: 'showDetails',
                pageTitle: 'Szczegoly lekarza',
                formAction: '',
                navLocation: 'lekarz',
                validationErrors: []
            });
        });
}

/*-------------------------------------*/

exports.addLekarz = (req, res, next) => {
    const lekarzData = { ...req.body };
    LekarzRepository.createLekarz(lekarzData)
        .then(result => {
            res.redirect('/doctor');
        })
        .catch(err => {
            res.render('pages/lekarz/form', {
                lekarz: lekarzData,
                pageTitle: 'Dodaj lekarza',
                formMode: 'createNew',
                btnLabel: 'Dodaj lekarza',
                formAction: '/doctor/add',
                navLocation: 'lekarz',
                validationErrors: err.errors
            });
        });
};

exports.updateLekarz = (req, res, next) => {
    const lekarzId = req.body.id_lekarz;
    const lekarzData = { ...req.body };
    LekarzRepository.updateLekarz(lekarzId, lekarzData)
        .then(result => {
            res.redirect('/doctor');
        })
        .catch(err => {
            res.render('pages/lekarz/form', {
                lekarz: lekarzData,
                pageTitle: 'Edycja lekarza',
                formMode: 'edit',
                btnLabel: 'Edytuj lekarza',
                formAction: '/doctor/edit',
                navLocation: 'lekarz',
                validationErrors: err.errors
            });
        });
};

exports.deleteLekarz = (req, res, next) => {
    const lekarzId = req.params.lekId;
    LekarzRepository.deleteLekarz(lekarzId)
        .then(() => {
            res.redirect('/doctor');
        });
};

