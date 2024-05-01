const express = require('express')
const cors = require("cors")
const tetsConnection = require('./DB/connection')
const { userRouter } = require('./routes')
const app = express()
require('dotenv').config()
const port = process.env.PORT
cors({
    origin: "http://localhost:4200",
    optionsSuccessStatus:200
})
tetsConnection()
app.use(express.json())
app.use(userRouter)
app.listen(port)
