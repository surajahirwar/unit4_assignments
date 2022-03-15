const mongoose =require("mongoose");


const Evaluation_Schema = new mongoose.Schema({

	data_of_evaluation:{type:String,required:true},
	instanceId:{type:mongoose.Schema.Types.ObjectId,ref:"users",required:true},
	batchId:{type:mongoose.Schema.Types.ObjectId,ref:"batch",required:true}

});
const Evaluation = mongoose.model("evaluations", Evaluation_Schema);

module.exports= Evaluation