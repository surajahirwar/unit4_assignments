const express=require("express")

const Submission=require("../controllers/controllersubmission")
const router=express.Router();

router.post("/",async(req,res)=>{
    try {
        let submission_in=await Submission.create(req.body)
        return res.send(submission_in)
    } 
    catch(err){
        return res.send({error:err})
    }
})
router.get("/evaluation/:id",async(req,res)=>{
     try {
         let evaluation=await Submission.find({evaluationId:{$eq:req.params.id}})
         .populate({path:"evaluationId",
         populate:{path:"instructor"},
         populate:{path:"batchId"}})
         .populate("studentId")
         .lean().
         exec()
          return res.send(evaluation)
        } 
     	catch (err) {
        	return res.send({error:err})
     }
 })

 router.get("/evaluation",async(req,res)=>{
     try {
         let evaluation = await Submission.find()
         .sort({evaluation_marks:-1})
         .populate("studentId")
         .limit(1)
         .lean()
         .exec()
    
         return res.send(evaluation)
        }
      catch (err) {
        return res.send({error:err})
     }
 })

module.exports=router