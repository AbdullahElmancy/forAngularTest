const mongoose = require('mongoose');

let tetsConnection = ()=>{
    mongoose.connect(process.env.DATABASE)
}

module.exports = tetsConnection 
