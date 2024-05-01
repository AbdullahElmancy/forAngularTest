const userCollection = require("../../../DB/user")

const register = async(req,res)=>{
try {
    const {first_name,last_name,email,password,age} = req.body
    const findUser = await userCollection.findOne({email})
    if(findUser){
        res.status(404).json({message:"User already exist"})
    }else{
        const addUser = new userCollection({first_name,last_name,email,password,age})
        const saveUser =await addUser.save()
        res.status(200).json({message:"Sucsses added user", saveUser})
    }
} catch (error) {
    res.status(505).json({message:"Server error"})
}

}
module.exports = register