const express = require("express");

const User = require('../models/usermodel');
const router=express.Router();


router.post("/",async(req, res)=>{

		try{
			let user = await User.create(req.body)
			return res.send(user)
		}
		catch(err){
			return res.send({error:err});
		}
})

module.exports=router