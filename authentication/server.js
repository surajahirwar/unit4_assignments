
const app=require("./index.js")
const connect=require("./configs/db")
app.listen(5000,async()=>{
    try {
        await connect()
        console.log("listening on 5000")
    } catch (error) {
        console.log("Error :",error)
    }
})


// that's not work
