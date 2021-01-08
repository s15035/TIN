exports.showLoginForm = (req, res, next) => {
    res.render('pages/login', { navLocation: 'dashboard'});
}