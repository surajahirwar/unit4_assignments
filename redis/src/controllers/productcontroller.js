const express=require("express")
const router=express.Router()
const client=require("../configs/redis")
const Product = require("../models/productmodel")

router.post("",async(req,res)=>{
    try {
        const product = await Product.create(req.body);
        const products = await Product
        .find()
        .lean()
        .exec()
        
        client.set("products",JSON.stringify(products))
        return res.status(201).send(product)
        
    } catch(err){
        return res.status(500).send({message:err.message})
    }
})

router.get("",async(req,res)=>{
    try {
          client.get("products",
          async function(err,fetched){
              if(fetched){
                  const products = JSON.parse(fetched)
                  return res.status(200).send(products)
              }
              else{
                  try {
                    const products = await Product
                    .find()
                    .lean()
                    .exec()
                    client.set("products",JSON.stringify(products))
                    return res.status(200).send(products)
                      
                  } catch(err){
                      return res.send(err)
                  }
              }
          })
        
    } catch(err){
        return res.status(500).send({message:err.message})
    }
   
})

router.get("/:id",async(req,res)=>{
    try {
        client.get(`products.${req.params.id}`,
        async function(err,fetched){
            if(fetched){
                const product = JSON.parse(fetched)
                return res.status(200).send(product)
            }
            else{
                try{
                    const product = await Product.findById(req.params.id)
                    .lean()
                    .exec()
                    client.set(`products.${req.params.id}`,JSON.stringify(product))
                    return res.send(product)
                } catch(err){
                    return res.send(err)
                }
               
            }
        })
    
        
    } catch(err) {
        return res.status(500).send({message:err.message})
    }
   
})

router.patch("/:id",async(req,res)=>{
    try {
        const product = await Product.findByIdAndUpdate(req.params.id,req.body)
        .lean()
        .exec();
        const products = await Product
        .find()
        .lean()
        .exec()

        client.set(`products.${req.params.id}`,JSON.stringify(product))
        client.set("products",JSON.stringify(products))
        return res.status(201).send(product)
        
    } catch(err){
        return res.status(500).send({message:err.message})
    }
   
})

router.delete("/:id",async(req,res)=>{
    try {
        const product=await Product.findByIdAndDelete(req.params.id)
        .lean().
        exec();
        const products=await Product
        .find()
        .lean()
        .exec();

        client.del(`products.${req.params.id}`);
        client.set(`products`,JSON.stringify(products))
        
        return res.status(201).send(product)
        
    } catch(err){
        return res.status(500).send({message:err.message})
    }
   
})
module.exports=router