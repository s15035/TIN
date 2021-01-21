exports.showWizytaList = (req, res, next) => {
    res.render('pages/wizyta/list', { navLocation: 'wizyta'});
}

exports.showWizytaDetails = (req, res, next) => {
    res.render('pages/wizyta/details', { navLocation: 'wizyta'});
}

exports.showAddWizytaForm = (req, res, next) => {
    res.render('pages/wizyta/form', { navLocation: 'wizyta'});
}