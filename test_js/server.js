const express = require('express');
const bodyParser = require('body-parser');
var _u = require("underscore");
var request = require('request');
//const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(express.static('./public'));
//app.use(cors());
app.get("/",function(req,res){
    res.send("Hi vishwa");
})
  
  // starting the server
  app.listen(3001, () => {
    console.log('listening on port 3001');
  });