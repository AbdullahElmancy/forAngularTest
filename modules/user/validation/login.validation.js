const Joi = require("joi");

const loginValidation = {
    body:Joi.object().keys({
        email:Joi.string().email().required(),
        password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
    })
}
module.exports = loginValidation