const Joi = require('joi');

const wizytaSchema = Joi.object({
    id_wizyta: Joi.number()
        .optional()
        .allow(""),
    id_pacjent: Joi.number()
        .required(),
    id_lekarz: Joi.number()
        .required(),
    objawy: Joi.string()
        .min(5)
        .required(),
    leczenie: Joi.string()
        .min(5)
        .required(),
    data_wizyty: Joi.date()
        .required()
});

module.exports = wizytaSchema;