var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { navLocation: 'main' });
});

exports.showDashboard = (req, res, next) => {
    res.render('pages/dashboard', { navLocation: 'dashboard' });
}

exports.showContactForm = (req, res, next) => {
    res.render('pages/contact-form', { navLocation: 'contact' });
}

router.get('/dashboard', this.showDashboard);
router.get('/contact', this.showContactForm);


module.exports = router;
