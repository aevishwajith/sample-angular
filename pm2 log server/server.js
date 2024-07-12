var express=require('express');
//const logger = require("./src/lib/logger");
var app=express();
app.get('/getAllProducts',(req,res)=>{
    console.log("i cam with pm2 server");
    res.send("welcome");

})
app.listen(3000,function(){
    console.log("listening on 3000");
})