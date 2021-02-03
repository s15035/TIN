const express = require('express');
const router = express.Router();

const lekarzControler = require('../controllers/lekarzController');
const authUtils = require('../util/authUtils');

router.get('/', lekarzControler.showLekarzList);
router.get('/add', authUtils.permitAuthenticatedUser, lekarzControler.showAddLekarzForm);
router.get('/details/:lekId', lekarzControler.showLekarzDetails);
router.get('/edit/:lekId', authUtils.permitAuthenticatedUser, lekarzControler.showEditLekarzForm);
router.get('/login', lekarzControler.showLoginForm);

router.post('/add', authUtils.permitAuthenticatedUser, lekarzControler.addLekarz);
router.post('/edit', authUtils.permitAuthenticatedUser, lekarzControler.updateLekarz);
router.get('/delete/:lekId', authUtils.permitAuthenticatedUser, lekarzControler.deleteLekarz);

module.exports = router;
