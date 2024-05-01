const Joi = require("joi");

const signUpValidtion = {
    body:Joi.object().keys({
        first_name:Joi.string().min(3).max(15).required(),
        last_name:Joi.string().min(3).max(15).required(),
        age:Joi.number().required(),
        email:Joi.string().email().required(),
        password:Joi.string().pattern(new RegExp('^[A-Z][a-zA-Z0-9]{3,30}$')).required()
    })
}
module.exports = signUpValidtion