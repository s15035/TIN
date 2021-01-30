const Joi = require('joi');

const pacjentSchema = Joi.object({
    id_lekarz: Joi.number()
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
    pesel: Joi.string()
        .min(11)
        .max(11)
        .required(),
    email: Joi.string()
        .email()
        .min(5)
        .max(60)
        .required(),
    telefon: Joi.string()
        .min(9)
        .max(9)
        .required(),
    kod_pocztowy: Joi.string()
        .min(6)
        .max(6)
        .required(),
    miasto: Joi.string()
        .min(2)
        .max(60)
        .required(),
    ulica: Joi.string()
        .min(2)
        .max(60)
        .required(),
    haslo: Joi.string()
        .min(8)
        .max(25)
        .required()
});

module.exports = pacjentSchema;