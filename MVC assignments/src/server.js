
const app=require("./index.js")
const connect=require("./configs/db")
app.listen(5000,async()=>{
    try {
        await connect()
        console.log("listening at port 5000")
    } catch (error) {
        console.log("err :",err)
    }
})
