const express = require('express');
const router = express.Router();

const dashboardController = require('../controllers/dashboardController');
router.get('/', dashboardController.showDashboard);

module.exports = router;
