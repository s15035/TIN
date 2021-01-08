const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');
router.get('/', productController.showProductList);

router.get('/add', productController.showAddProductForm);
router.get('/details', productController.showProductDetails);

module.exports = router;
