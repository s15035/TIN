const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.get('/', productController.showProductList);
router.get('/details/:productId', productController.showProductDetails);
router.get('/add', productController.showAddProductForm);

module.exports = router;

