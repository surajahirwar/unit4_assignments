const express=require("express")

const Batch=require("../controllers/controllerbatch")
const router=express.Router();



router.post("/",async(req, res)=>{

		try{

			let batch = await Batch.create(req.body)
			return res.send(batch)
		}
		catch(err){
			return res.send({error:err});
		}
})

module.exports=router