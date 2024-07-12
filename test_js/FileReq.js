const express = require("express");
var bodyParser = require('body-parser')
//const cors = require("cors");
const app = express("express");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.post('/test', (req, res) => {
    var data=req.body.data;
    console.log(data);
    res.send(data);
  })

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("Server running on port " + PORT))