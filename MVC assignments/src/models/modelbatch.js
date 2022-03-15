const mongoose =require("mongoose");


const Batch_Schema = new mongoose.Schema({
	batch_name:{type:String,required:true},

},{
	timestamp:true
})
const Batch = mongoose.model("batchs",Batch_Schema);

module.exports=Batch