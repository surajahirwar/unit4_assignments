const mongoose=require ("mongoose")

const Users_Schema = new mongoose.Schema({
	firstName:{type:String,required:true},
	lastName:{type:String,required:true},
	gender:{type:String,required:true},
	dataOfBirth:{type:String,required:true},
	type:{type:String,required:true},
},{
	timestamp:true
});
const User = mongoose.model("users",Users_Schema);

module.exports=User