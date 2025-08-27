const mongoose = require('mongoose')

const otp = new mongoose.Schema({
    email : { type : String , required : true },
    otp : { type : String , required : true },
    createAt : {type : Date , default : Date.now , expires : 300}
})

const otpData = mongoose.model('otpData' , otp)
module.exports = {otpData}




