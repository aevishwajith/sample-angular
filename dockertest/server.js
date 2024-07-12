var express=require('express');
var app=express();
app.get('/',(req,res)=>{
    res.send("Nodejs file is converted to docker image")
})
const PORT = 4000;
const HOST='0.0.0.0';
app.listen(PORT,HOST);