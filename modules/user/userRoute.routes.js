const validationMethod = require("../../middlewares/validationMethod")
const login = require("./controller/login")
const register = require("./controller/register")
const loginValidation = require("./validation/login.validation")
const signUpValidtion = require("./validation/register.validation")

let userRouter = require("express").Router()
userRouter.post("/register",validationMethod(signUpValidtion),register)
userRouter.post("/login",validationMethod(loginValidation),login)



module.exports = userRouter