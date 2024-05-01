const userCollection = require("../../../DB/user")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
const login = async(req,res)=>{
    // try {
        const {email,password} = req.body
        const findUser = await userCollection.findOne({email})
        if(findUser){
            let decodePassword = await bcrypt.compare(password,findUser.password)
            if (decodePassword) {
                let sendToken = jwt.sign({
                    first_name:findUser.first_name,
                    last_name:findUser.last_name,
                    email:findUser.email,
                    age:findUser.age
                },process.env.TOKENKEY,{expiresIn:'7d'})
                res.status(201).json({message:"Login is succes",Token:sendToken})
            }else{
                res.status(404).json({message:"Password  is wrong "})
            }
        }else{
            res.status(404).json({message:"User isn't exist"})
        }
    // } catch (error) {
    //     res.status(505).json({message:"server error"})
    // }
}

module.exports = login