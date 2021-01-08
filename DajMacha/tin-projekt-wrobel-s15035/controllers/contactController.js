exports.showContactForm = (req, res, next) => {
    res.render('pages/contact-form', { navLocation: 'contact'});
}
