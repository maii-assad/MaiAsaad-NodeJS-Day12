const mongoose = require('mongoose');

const products = new mongoose.Schema({
    description : {type : String , required : true},
    price : {type : Number , required : true },
    id : {type : String , required : true},
    title : {type : String , required : true},
    quantity : {type : Number , required : true}
})

const productData = mongoose.model('productData' , products)
module.exports = {productData};


// productData : name of the Schema 
