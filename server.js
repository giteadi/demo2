const express=require("express"); 
const app=express();
const dbConnection=require("./Config/db");
require("dotenv").config();
// calling db
dbConnection();
const port =process.env.PORT || 4001 ;
// lets run server
app.listen(port,(req,res)=>{
    console.log(`server is running on port no ${port}`);
})

app.get('/',(req,res)=>{
    res.send("Hellow world")
})
app.get('/twitter',(req,res)=>{
    res.send("Hello Twitter")
})
app.get('/youtube',(req,res)=>{
    res.send("Hello youtube")
})