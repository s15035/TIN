const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
router.get('/', userController.showUserList);

router.get('/add', userController.showAddUserForm);

module.exports = router;
