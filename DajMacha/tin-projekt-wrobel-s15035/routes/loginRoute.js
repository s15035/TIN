const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController');
router.get('/', loginController.showLoginForm);

module.exports = router;
