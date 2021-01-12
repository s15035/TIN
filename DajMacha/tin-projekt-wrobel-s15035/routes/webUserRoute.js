const express = require('express');
const router = express.Router();

const webUserController = require('../controllers/webUserController');

router.get('/', webUserController.showWebUserList);
router.get('/details/:webUserId', webUserController.showWebUserDetails);
router.get('/edit/:webUserId', webUserController.showEditWebUserForm);
router.get('/add', webUserController.showAddWebUserForm);
router.get('/login', webUserController.showLoginWebUserForm);
router.get('/register', webUserController.showRegisterWebUserForm);

module.exports = router;

