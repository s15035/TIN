const express = require('express');
const router = express.Router();

const orderController = require('../controllers/orderController');
router.get('/', orderController.showOrderList);

module.exports = router;
