const Joi = require('joi');

const lekarzSchema = Joi.object({
    id_pacjent: Joi.number()
        .optional()
        .allow(""),
    imie: Joi.string()
        .min(2)
        .max(60)
        .required(),
    nazwisko: Joi.string()
        .min(2)
        .max(60)
        .required(),
    specjalizacja: Joi.string()
        .min(5)
        .max(60)
        .required(),
    oddzial: Joi.string()
        .min(2)
        .max(60)
        .required(),
    haslo: Joi.string()
        .min(8)
        .max(25)
        .required(),
    email: Joi.string()
        .email()
        .min(5)
        .max(60)
        .required()
});

module.exports = lekarzSchema;