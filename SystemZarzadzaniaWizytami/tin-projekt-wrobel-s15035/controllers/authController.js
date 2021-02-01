const LekarzRepository = require('../repository/sequelize/LekarzRepository');
const authUtil = require('../util/authUtils');

exports.login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.haslo;
    console.log();
    LekarzRepository.findByEmail(email)
        .then(lekarz => {
            if(!lekarz) {
                res.render('index', {
                    navLocation: '',
                    loginError: "Nieprawid這wy adres email lub has這"
                })
            } else if(authUtil.comparePasswords(password, lekarz.haslo) === true) {
                req.session.loggedUser = lekarz;
                res.redirect('/');
            } else {
                res.render('index', {
                    navLocation: '',
                    loginError: "Nieprawid這wy adres email lub has這"
                })
            }
        })
        .catch(err => {
            console.log(err);
        });

}

exports.logout = (req, res, next) => {
    req.session.loggedUser = undefined;
    res.redirect('/');
}