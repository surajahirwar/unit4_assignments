const express=require("express")

const app=express()
app.use(express.json())

const ProductController=require("./controllers/productcontroller")

app.use("/product",ProductController)

module.exports=app