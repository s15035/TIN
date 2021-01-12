exports.showProductList = (req, res, next) => {
    res.render('pages/product', { navLocation: 'product' });
}

exports.showProductDetails = (req, res, next) => {
    res.render('pages/product-info', { navLocation: 'product' });
}

exports.showAddProductForm = (req, res, next) => {
    res.render('pages/new-product', { navLocation: 'dashboard' });
}

