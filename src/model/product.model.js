const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{type:String, required: true},
    price: {type:Number,required:true},
    lister: {type: mongoose.Schema.Types.ObjectId, ref:"users"}
})

module.exports = mongoose.model('product',productSchema)