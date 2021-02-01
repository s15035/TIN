const LekarzRepository = require('../repository/sequelize/LekarzRepository');

exports.login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    LekarzRepository.findByEmail(email)
        .then(lekarz => {
            if(!lekarz) {
                res.render('index', {
                    navLocation: '',
                    loginError: "Nieprawid�owy adres email lub has�o"
                })
            } else if(lekarz.password === password) {
                req.session.loggedUser = lekarz;
                res.redirect('/');
            } else {
                res.render('index', {
                    navLocation: '',
                    loginError: "Nieprawid�owy adres email lub has�o"
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