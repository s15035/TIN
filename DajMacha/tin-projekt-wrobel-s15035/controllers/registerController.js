exports.showRegisterForm = (req, res, next) => {
    res.render('pages/register', { navLocation: 'dashboard'});
}