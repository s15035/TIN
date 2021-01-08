exports.showUserList = (req, res, next) => {
    res.render('pages/user-list', { navLocation: 'dashboard'});
}

exports.showAddUserForm = (req, res, next) => {
    res.render('pages/add-user', { navLocation: 'dashboard'});
}

