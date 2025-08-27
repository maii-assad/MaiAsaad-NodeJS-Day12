// بتتأكد انت عامل login   ولا لا 

const mongoose = require('mongoose');


const token = new mongoose.Schema({
    username : {type : String , required : true},
    email : {type : String , required : true },
    role : {type : String , enum : ['user','admin'], default : "user"},
    creaetedAT : {type : Date , default : Date.now , expires : 60 * 60}, 
})

const tokenData = mongoose.model('tokenData' , token)
module.exports = {tokenData};