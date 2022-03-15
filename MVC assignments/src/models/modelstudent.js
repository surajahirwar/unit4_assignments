const mongoose = require("mongoose");

const Students_Schema = new mongoose.Schema({
	rollId:{type:String,required:true},
	batchId:{type:mongoose.Schema.Types.ObjectId,ref:"batchs",required:true},
	userId:{type:mongoose.Schema.Types.ObjectId,ref:"users",required:true},
},{
	timestamp:true
})
const Student = mongoose.model("students",Students_Schema)

module.exports=Student