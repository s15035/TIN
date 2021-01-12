exports.showWebUserList = (req, res, next) => {
    res.render('pages/user-list', { navLocation: 'dashboard'});
}

exports.showWebUserDetails = (req, res, next) => {
    res.render('pages/user-details', { navLocation: 'dashboard'});
}

exports.showEditWebUserForm = (req, res, next) => {
    res.render('pages/user-edit', { navLocation: 'dashboard'});
}

exports.showAddWebUserForm = (req, res, next) => {
    res.render('pages/add-user', { navLocation: 'dashboard'});
}

exports.showRegisterWebUserForm = (req, res, next) => {
    res.render('pages/register', { navLocation: 'dashboard'});
}

exports.showLoginWebUserForm = (req, res, next) => {
    res.render('pages/login', { navLocation: 'dashboard'});
}