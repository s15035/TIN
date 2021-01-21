const express = require('express');
const router = express.Router();

const wizytaControler = require('../controllers/wizytaController');

router.get('/', wizytaControler.showWizytaList);
router.get('/add', wizytaControler.showAddWizytaForm);
router.get('/details/:wizytaId', wizytaControler.showWizytaDetails);

module.exports = router;
