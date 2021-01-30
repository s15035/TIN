const express = require('express');
const router = express.Router();

const pacjentControler = require('../controllers/pacjentController');

router.get('/', pacjentControler.showPacjentList);
router.get('/register', pacjentControler.showRegisterForm);
router.get('/details/:pacId', pacjentControler.showPacjentDetails);
router.get('/edit/:pacId', pacjentControler.showEditPacjentForm);
router.get('/login', pacjentControler.showLoginForm);

router.post('/register', pacjentControler.registerPacjent);
router.post('/edit', pacjentControler.updatePacjent);
router.get('/delete/:pacId', pacjentControler.deletePacjent);

module.exports = router;
