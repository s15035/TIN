exports.showLekarzList = (req, res, next) => {
    res.render('pages/lekarz/list', { navLocation: 'lekarz'});
}

exports.showAddLekarzForm = (req, res, next) => {
    res.render('pages/lekarz/form', { navLocation: 'lekarz'});
}
exports.showLekarzDetails = (req, res, next) => {
    res.render('pages/lekarz/details', { navLocation: 'lekarz'});
}

exports.showLoginForm = (req, res, next) => {
    res.render('pages/lekarz/login', { navLocation: 'lekarz'});
}