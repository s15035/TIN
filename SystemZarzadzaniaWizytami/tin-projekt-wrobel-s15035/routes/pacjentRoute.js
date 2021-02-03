const express = require('express');
const router = express.Router();

const pacjentControler = require('../controllers/pacjentController');
const authUtils = require('../util/authUtils');

router.get('/', authUtils.permitAuthenticatedUser, pacjentControler.showPacjentList);
router.get('/register', pacjentControler.showRegisterForm);
router.get('/add', authUtils.permitAuthenticatedUser, pacjentControler.showAddPacjentForm);
router.get('/details/:pacId', authUtils.permitAuthenticatedUser, pacjentControler.showPacjentDetails);
router.get('/edit/:pacId', authUtils.permitAuthenticatedUser, pacjentControler.showEditPacjentForm);
router.get('/login', pacjentControler.showLoginForm);

router.post('/register', pacjentControler.registerPacjent);
router.post('/add', authUtils.permitAuthenticatedUser, pacjentControler.addPacjent);
router.post('/edit', authUtils.permitAuthenticatedUser, pacjentControler.updatePacjent);
router.get('/delete/:pacId', authUtils.permitAuthenticatedUser, pacjentControler.deletePacjent);

module.exports = router;
