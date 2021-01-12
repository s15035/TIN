exports.showUserOrderList = (req, res, next) => {
    res.render('pages/order-list', { navLocation: 'dashboard'});
}

exports.showUserOrderDetails = (req, res, next) => {
    res.render('pages/order-details', { navLocation: 'dashboard'});
}

exports.showEditUserOrderForm = (req, res, next) => {
    res.render('pages/order-edit', { navLocation: 'dashboard'});
}

