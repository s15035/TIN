const PacjentRepository = require('../repository/sequelize/PacjentRepository');

exports.getPacjent = (req, res, next) => {
    PacjentRepository.getPacjent()
        .then(pacjent => {
            res.status(200).json(pacjent);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getPacjentById = (req, res, next) => {
    const pacjentId = req.params.pacjentId;
    PacjentRepository.getPacjentById(pacjentId)
        .then(pacjent => {
            if (!pacjent) {
                res.status(404).json({
                    message: 'Employee with id: ' + pacjentId + ' not found'
                })
            } else {
                res.status(200).json(pacjent);
            }
        });
};

exports.createPacjent = (req, res, next) => {
    PacjentRepository.createPacjent(req.body)
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

exports.updatePacjent = (req, res, next) => {
    const pacjentId = req.params.pacjentId;
    PacjentRepository.updatePacjent(pacjentId, req.body)
        .then(result => {
            res.status(200).json({ message: 'Employee updated!', pacjent: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};

exports.deletePacjent = (req, res, next) => {
    const pacjentId = req.params.pacjentId;
    PacjentRepository.deletePacjent(pacjentId)
        .then(result => {
            res.status(200).json({ message: 'Removed employee', pacjent: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};