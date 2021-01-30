const express = require('express');
const router = express.Router();

const wizytaControler = require('../controllers/wizytaController');

router.get('/', wizytaControler.showWizytaList);
router.get('/add', wizytaControler.showAddWizytaForm);
router.get('/details/:wizId', wizytaControler.showWizytaDetails);
router.get('/edit/:wizId', wizytaControler.showWizytaEdit);
router.post('/add', wizytaControler.addWizyta);
router.post('/edit', wizytaControler.updateWizyta);
router.get('/delete/:wizId', wizytaControler.deleteWizyta);

module.exports = router;
