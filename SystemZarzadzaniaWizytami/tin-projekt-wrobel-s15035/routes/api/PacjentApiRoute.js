const express = require('express');
const router = express.Router();

const pacjentApiController = require('../../api/PacjentAPI');

router.get('/', pacjentApiController.getPacjent);
router.get('/:pacjentId', pacjentApiController.getPacjentById);
router.post('/register', pacjentApiController.createPacjent);
router.put('/edit/:pacjentId', pacjentApiController.updatePacjent);
router.delete('/:pacjentId', pacjentApiController.deletePacjent);

module.exports = router;