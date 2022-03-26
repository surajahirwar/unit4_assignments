const mongoose=require("mongoose")

const user_Schema=new mongoose.Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:false},
    profile_pic:{type:String,required:true}
},{
    timestamps:true,
    versionKey:false
})

const User = mongoose.model("user",user_Schema)

module.exports = User