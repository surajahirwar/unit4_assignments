const mongoose=require("mongoose")

const gallary_Schema=new mongoose.Schema({
    picture:{type:Array,required:false},
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        src:"user",
        required:true
    }
})

const Gallary = mongoose.model("gallary",gallary_Schema);

module.exports=Gallary