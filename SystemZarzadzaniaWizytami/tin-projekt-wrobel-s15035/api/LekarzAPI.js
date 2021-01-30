const LekarzRepository = require('../repository/sequelize/LekarzRepository');

exports.getLekarz = (req, res, next) => {
    LekarzRepository.getLekarz()
        .then(lekarze => {
            res.status(200).json(lekarze);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getLekarzById = (req, res, next) => {
    const lekId = req.params.lekId;
    LekarzRepository.getLekarzById(lekId)
        .then(lekarze => {
            if (!lekarze) {
                res.status(404).json({
                    message: 'Doctor with id: ' + lekId + ' not found'
                })
            } else {
                res.status(200).json(lekarze);
            }
        });
};

exports.createLekarz = (req, res, next) => {
    LekarzRepository.createLekarz(req.body)
        .then(newObj => {
            res.status(201).json(newObj);
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.updateLekarz = (req, res, next) => {
    const lekarzId = req.params.lekarzId;
    LekarzRepository.updateLekarz(lekarzId, req.body)
        .then(result => {
            res.status(200).json({ message: 'Employee updated!', lekarz: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};

exports.deleteLekarz = (req, res, next) => {
    const lekarzId = req.params.lekarzId;
    LekarzRepository.deleteLekarz(lekarzId)
        .then(result => {
            res.status(200).json({ message: 'Removed employee', lekarz: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};