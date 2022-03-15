const express=require("express")

const User=require("../controllers/controlleruser")

const router=express.Router();

router.get("",async(req, res)=>{

		try{

			let user = await User.find({}).lean().exec()
			return res.send(user)
		}
		catch(err){
			return res.send({error:err});
		}
})

router.post("",async(req, res)=>{

		try{

			let user = await User.create(req.body)
			return res.send(user)
		}
		catch(err){
			return res.send({error:err});
		}
})

module.exports=router