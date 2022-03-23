
const express = require("express");
const connect = require("./configs/db");
const {body}=require("express-validator")


const app = express();
app.use(express.json());                    


const userController = require("./controllers/usercontroller");
const userpost = require("./controllers/postcontroller");
const {register, login} = require("./controllers/authcontroller");


app.use("/users",userController)
app.use("/posts",userpost)
app.use("/register",
    body("name").not().isEmpty(),
    body("email").not().isEmpty().isEmail(),
    body("password").not().isEmpty(),
    register)

app.use("/login",
body("email").isEmail().not().isEmpty(),
body("password").not().isEmpty(),
login)




app.listen(5000, async()=>{
   
    try{
        await connect();
        console.log("lesten at 5000 port")
    }
    catch(err){
            console.log(err)
    }

});


