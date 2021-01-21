const express = require('express');
const router = express.Router();

const pacjentControler = require('../controllers/pacjentController');

router.get('/', pacjentControler.showPacjentList);
router.get('/register', pacjentControler.showRegisterForm);
router.get('/details/:pacjentId', pacjentControler.showPacjentDetails);
router.get('/login', pacjentControler.showLoginForm);

module.exports = router;
