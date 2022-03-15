const express=require("express");
const app=express();

app.use(express.json());



const Controlleruser=require("./controllers/controlleruser");
const Controllerstudent=require("./controllers/controllerstudent");
const Controllerbatch=require("./controllers/controllerbatch");
const Controllerevaluation=require("./controllers/controllerevaluation");
const Controllersubmission=require("./controllers/controllersubmission");

app.use("/user",Controlleruser)
app.use("/batch",Controllerbatch)
app.use("/evaluation",Controllerevaluation)
app.use("/student",Controllerstudent)
app.use("/submission",Controllersubmission)


module.exports=app

