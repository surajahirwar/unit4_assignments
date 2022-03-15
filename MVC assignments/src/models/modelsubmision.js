const mongoose =require("mongoose");

const Submission_Schema = mongoose.Schema({
	evaluation_marks:{type:String,required:true},
	evaluationId:{type:mongoose.Schema.Types.ObjectId,ref:"evaluations",required:true},
	studentId:{type:mongoose.Schema.Types.ObjectId,ref:"users", required:true},
},{
	timestamp:true
})
const Submission = mongoose.model("submissions", Submission_Schema);

module.exports= Submission;