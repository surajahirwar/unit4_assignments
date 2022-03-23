var jwt = require('jsonwebtoken');
const User = require("../models/usermodel");
const {validationResult } = require("express-validator")

const generateToken = (user) => {
    return jwt.sign({user}, "surajahirwar")
}


 
const  register =  async(req, res)=>{

        try{
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.send(errors.array())
            }

            let user = await User.findOne({email: req.body.email});
            if(user){
                return res.status(400).send({message:"email already exists"})
            }
            user = await User.create(req.body);
        
            const token = generateToken(user)
            return res.status(200).send({user, token});
        }
        catch(err){
            return res.send(200).send({message:err.message})
        }
};

const login = async (req, res) => {
    try{
        const errors=validationResult(req)
        if(!errors.isEmpty()){
            return res.send({error:errors.array()})
        }
        
        const user = await User.findOne({email :req.body.email})
      
        if(!user){
            return res.status(400).send("Wrong Email or Password")
        }

       
        const match = user.checkPassword(req.body.password)

      
        if(!match){
            return res.status(400).send({message : "Wrong Email or Password"})
        }

       
        const token = generateToken(user)
        return res.status(200).send({user, token});


    }
    catch(err){
        res.status(400).send({message : err.message})
    }
}

module.exports= {register, login};
