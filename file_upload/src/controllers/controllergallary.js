const express=require("express")
const router = express.Router()
const uploads = require("../middleware/upload")
const Gallary = require("../models/gallarymodel")

router.post("/adding",
            uploads.array("picture",[5]),
            async(req,res)=>{
    try{
        let gallary = await Gallary.create({
            picture:req.files,
            user_id:req.body.user_id
        })
        return res.status(200).send(gallary);

    } 
    catch(error){
        return res.status(500).send({ message: error.message });
        
    }
})


module.exports = router