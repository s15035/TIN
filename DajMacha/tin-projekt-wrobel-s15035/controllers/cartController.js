exports.showCart = (req, res, next) => {
    res.render('pages/cart', { navLocation: 'dashboard'});
}