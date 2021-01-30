const express = require('express');
const router = express.Router();

const lekarzApiController = require('../../api/LekarzAPI');

router.get('/', lekarzApiController.getLekarz);
router.get('/:lekarzId', lekarzApiController.getLekarzById);
router.post('/add', lekarzApiController.createLekarz);
router.put('/edit/:lekarzId', lekarzApiController.updateLekarz);
router.delete('/:lekarzId', lekarzApiController.deleteLekarz);

module.exports = router;