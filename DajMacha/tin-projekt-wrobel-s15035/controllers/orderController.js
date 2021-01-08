exports.showOrderList = (req, res, next) => {
    res.render('pages/order-list', { navLocation: 'dashboard'});
}
