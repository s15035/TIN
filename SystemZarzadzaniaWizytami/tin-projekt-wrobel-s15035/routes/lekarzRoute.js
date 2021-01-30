const express = require('express');
const router = express.Router();

const lekarzControler = require('../controllers/lekarzController');

router.get('/', lekarzControler.showLekarzList);
router.get('/add', lekarzControler.showAddLekarzForm);
router.get('/details/:lekId', lekarzControler.showLekarzDetails);
router.get('/edit/:lekId', lekarzControler.showEditLekarzForm);
router.get('/login', lekarzControler.showLoginForm);

router.post('/add', lekarzControler.addLekarz);
router.post('/edit', lekarzControler.updateLekarz);
router.get('/delete/:lekId', lekarzControler.deleteLekarz);

module.exports = router;
