const express = require('express')
const cors = require("cors")
const tetsConnection = require('./DB/connection')
const { userRouter } = require('./routes')
const app = express()
require('dotenv').config()
const port = process.env.PORT
tetsConnection()
app.use(cors({
    origin: "*",
    optionsSuccessStatus:200
}))
app.use(express.json())
app.use(userRouter)
app.listen(port)
