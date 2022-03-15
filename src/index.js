const express=require("express")
const app=express();


app.use(express.json())

const Controlleruser=require("./controllers/controlleruser")

app.use("/user",Controlleruser)

module.exports = app


