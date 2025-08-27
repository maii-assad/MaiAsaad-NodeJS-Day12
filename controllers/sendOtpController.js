const {UserData} = require('../models/users')
const {otpData} = require('../models/otp')
const {tokenData} = require('../models/token')


const sendOtp = async (req, res) => {
    try{ 
        const {email} = req.query;
    if(!email){
        return res.status(400).send({message: "Email is required"})
    }

    const getUser = await UserData.findOne({email})
    if(!getUser){
        return res.status(400).send({message: "User not found"})
    }

    // Generate OTP (randon 6 digit number)
    const randonSix = Math.floor(100000 + Math.random() * 900000);

    const addOtp = new otpData({
        email,
        otp : randonSix
    })

    await addOtp.save()
    return res.status(200).send({message: "OTP sent successfully", otp: randonSix})
}
    catch(err){
        return res.status(500).send({message: err.message})
    }
    
}



module.exports = {sendOtp}
