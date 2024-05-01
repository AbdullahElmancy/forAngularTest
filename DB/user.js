const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    first_name:{
        type:String,
    },
    last_name:{
        type:String,
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required: true,
        unique:true
    },
    age:Number
})

userSchema.pre("validate",function(next){
    this.password = bcrypt.hashSync(this.password, parseInt(process.env.SALTROUND));
    next()
})
const userCollection = model("user",userSchema)
module.exports = userCollection

