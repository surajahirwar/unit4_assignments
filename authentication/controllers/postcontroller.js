const express=require("express")

const router=express.Router();

const Post=require("../models/postmodel")
const authenticate=require("../middlewares/authenticate")


router.post("/", authenticate ,async(req,res)=>{
  req.body.user_id = req.userID;
  try{
      const post = await Post.create(req.body)
      return res.status(200).send(post)
  }
  catch(err){
      return res.status(400).send({message : err.message})
  }
})


router.get("/",authenticate,async(req,res)=>{
    try {
         let post=await Post.find()
         return res.send(post)
    } 
    catch (error) {
        return res.send(error)
    }
})


router.patch("/:id", authenticate, async (req, res) => {
    try {
      const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
  
      return res.status(200).send(post);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  router.delete("/:id", authenticate, async (req, res) => {
    try {
      const post = await Post.findByIdAndDelete(req.params.id).lean().exec();
     
      return res.status(200).send(post);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

module.exports=router