var express = require('express');
var app = express();

app.get('/',(req,res)=>{
    res.send("Hello");
})


app.listen('3000',()=>{
    console.log('server  is listening in port 3000 ')
})