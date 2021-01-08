exports.showDashboard = (req, res, next) => {
    res.render('pages/dashboard', { navLocation: 'dashboard'});
}
