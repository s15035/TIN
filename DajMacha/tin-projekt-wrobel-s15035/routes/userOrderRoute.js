const express = require('express');
const router = express.Router();

const userOrderController = require('../controllers/userOrderController');

router.get('/', userOrderController.showUserOrderList);
router.get('/details/:userOrderId', userOrderController.showUserOrderDetails);
router.get('/edit/:userOrderId', userOrderController.showEditUserOrderForm);

module.exports = router;

