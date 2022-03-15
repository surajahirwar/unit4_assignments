const express=require("express")

const Student=require("../controllers/controllerstudent")
const router=express.Router();


router.post("/",async(req, res)=>{

		try{

			let Student = await Student.create(req.body)
			return res.send(Student)
		}
		catch(err){
			return res.send({error:err});
			
		}
})


module.exports=router