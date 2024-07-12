var express=require('express');
const logger = require("./src/lib/logger");
var app=express();
app.get('/getAllProducts',(req,res)=>{
    console.log("this is from consolelog")
    logger.info("In get All Product Function.");
    var listProduct = ["xbox","ps1","ps2","ps3"];
    logger.info(listProduct);
    
    res.json({
        status: false,
        message: "Data Found",
        data: listProduct });

})
app.listen(4000,function(){
    console.log("listening on 4000");
})