exports.showPacjentList = (req, res, next) => {
    res.render('pages/pacjent/list', { navLocation: 'pacjent'});
}

exports.showPacjentDetails = (req, res, next) => {
    res.render('pages/pacjent/details', { navLocation: 'pacjent'});
}

exports.showRegisterForm = (req, res, next) => {
    res.render('pages/pacjent/register', { navLocation: 'pacjent'});
}

exports.showLoginForm = (req, res, next) => {
    res.render('pages/pacjent/login', { navLocation: 'pacjent'});
}