const express=require("express")

const Evaluation=require("../controllers/controllerevaluation")
const router=express.Router();


router.post("/",async(req, res)=>{

		try{

			let evaluatin_in = await Evaluation.create(req.body)
			return res.send(evaluation_in)
		}
		catch(err){
			return res.send({error:err});
			
		}
})

module.exports=router