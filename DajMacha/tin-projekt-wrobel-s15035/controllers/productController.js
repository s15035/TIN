exports.showProductList = (req, res, next) => {
    res.render('pages/product', { navLocation: 'product'});
}

exports.showAddProductForm = (req, res, next) => {
    res.render('pages/new-product', { navLocation: 'dashboard' });
}

exports.showProductDetails = (req, res, next) => {
    res.render('pages/product-info', { navLocation: 'product' });
}