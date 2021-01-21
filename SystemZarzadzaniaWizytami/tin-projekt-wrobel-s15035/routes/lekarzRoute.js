const express = require('express');
const router = express.Router();

const lekarzControler = require('../controllers/lekarzController');

router.get('/', lekarzControler.showLekarzList);
router.get('/add', lekarzControler.showAddLekarzForm);
router.get('/details/:lekarzId', lekarzControler.showLekarzDetails);
router.get('/login', lekarzControler.showLoginForm);

module.exports = router;
