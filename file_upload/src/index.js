const express=require("express")

const app=express();
app.use(express.json())

const Controlleruser=require("./controllers/controlleruser")
const Controllergallary=require("./controllers/controllergallary") 

app.use("/user",Controlleruser)
app.use("/gallary",Controllergallary)


module.exports = app