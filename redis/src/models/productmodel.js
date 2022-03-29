const mongoose = require("mongoose")


const Product_Schema = new mongoose.Schema({
    product_name:{type:String,required:true},
    price:{type:Number,required:true}
},{
    timestamps:true,
    versionKey:false
})

const Product = mongoose.model("product",Product_Schema)

module.exports = Product