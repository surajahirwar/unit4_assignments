const express=require("express")
const app=express();

let all_books=[

{
    name:"Mae",
    by:"mmccroary0",
    description:"Nondisplaced longitudinal fracture of left patella, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with nonunion"
},
{
    name:"Irwin",
    by:"ijessup1",
    description:"Displaced fracture of proximal phalanx of finger"
},
{
    name:"Alwyn",
    by:"abreckwell2",
    description:"Nondisplaced spiral fracture of shaft of humerus, left arm, subsequent encounter for fracture with nonunion"
},
{
    name:"Mabel",
    by:"mkeys3",
    description:"Displaced segmental fracture of shaft of ulna, unspecified arm, subsequent encounter for open fracture type I or II with malunion"
},
{
    name:"Robinett",
    by:"rcrewdson4",
    description:"Strain of flexor muscle, fascia and tendon of left thumb at forearm level, initial encounter"
},
{
    name:"Laureen",
    by:"lramsden5",
    description:"Separation of muscle (nontraumatic), unspecified upper arm"
},
{
    name:"Stafford",
    by:"spitway6",
    description:"Brown-Sequard syndrome of thoracic spinal cord"
},
{
    name:"Noam",
    by:"nbottoner7",
    description:"Displaced segmental fracture of shaft of humerus, left arm, subsequent encounter for fracture with routine healing"
},
{
    name:"Hashim",
    by:"hjouanet8",
    description:"Laceration without foreign body of left back wall of thorax without penetration into thoracic cavity, initial encounter"
},
{
    name:"Delmore",
    by:"dawty9",
    description:"Contusion, laceration, and hemorrhage of brainstem with loss of consciousness of unspecified duration, sequela"
}

];
   

function mid_1(req,res,next){
    console.log("fetching all books")
    next();
}


function mid_2(req,res,next){
    req.name=(req.params.name)
    .slice(-(req.params.name.length-1))
   all_books.map((ele)=>{
       if(ele.name==req.name){
           req.match_data=ele
       }
   })
    next();
}





app.get("/books",mid_1,(req,res)=>{
    return res.send(all_books);
})
app.get("/books/:name",mid_2,(req,res)=>{
    return res.send(req.match_data)
})




app.listen(5000,()=>{
    console.log("listening at 5000 port")
})