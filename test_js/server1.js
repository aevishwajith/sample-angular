const express = require('express');
const bodyParser = require('body-parser');
var _u = require("underscore");
var request = require('request');
//const cors = require('cors');
const app = express();
app.use(bodyParser.json());

function appliances(){
    var host = "100.127.243.5";
    //var username = process.env.VMANAGE_WEB_USERNAME;
    var username = "devops";
    //var password = process.env.VMANAGE_WEB_PASSWORD;
    var password = "De^ops@123";
    var reqUrl = "https://100.127.243.5:443/gms/rest/authentication/login";
    var postObj = {
        "url": reqUrl,
        "method": "POST",
        "form": {
            "user": username,
            "password": password,
            "submit": "Log In"
        },
        "headers": {
            "Upgrade-Insecure-Requests": 1
        },
        "resolveWithFullResponse": true,
        "simple": false,
        "followRedirect": true,
        "strictSSL":false,
        "Connection":"keep-alive",
        "timeout":60000
    };
    console.log("postObj--",postObj);
    request(postObj,(error, response, body)=> {
        if(error) 
			{
				console.log("error---",error);
				//return res.send(error);
			}
           // console.log('response------', response);
    var postObj1 = {
        "url": "https://100.127.243.5:443/gms/rest/appliance",
        "method": "GET",
        "headers": {
            //"Upgrade-Insecure-Requests": 1,
            //"Content-Type": "application/json"
            //'Cookie': 'gmsSessionID=node016qsq4x4367761bhgfrxwim0cn1438.node0; orchCsrfToken=c2150e65-4861-4ec2-a1e9-c3645c98ec13'
        },
        "resolveWithFullResponse": true,
        "simple": false,
        "followRedirect": true,
        "strictSSL":false,
        "Connection":"keep-alive"

    };
    postObj1["timeout"] = 60000;
    var xsrfToken = "";
    var cookSessionTd="";
    var cookCsrf="";
     var Token = "";
     var Cookie="";
     try {
        //console.log('response.headers', response.headers);
        Token = response.headers["set-cookie"][1];
        Cookie= response.headers["set-cookie"][0];
    } catch (e) { }
    if (Token != "") {
        var xsrfTokenarr = Token.match(/orchCsrfToken=[^;]+/);
        var xsrfToken = xsrfTokenarr[0].split("=")[1];
        cookCsrf=xsrfTokenarr[0];
        console.log('xsrfToken : ' + xsrfToken);
       // var xsrfToken = 'c2150e65-4861-4ec2-a1e9-c3645c98ec13';
        postObj1["headers"]["X-XSRF-TOKEN"] = xsrfToken;
    }
    if(Cookie!=""){
        var Cookiearr=Cookie.match(/gmsSessionID=[^;]+/);
        cookSessionTd=Cookiearr[0];
        //var mycookie=Cookiearr[0].split("=")[1];
       // postObj1["headers"]["Cookie"] = mycookie;
    }
    postObj1["headers"]["Cookie"] = cookSessionTd+"; "+cookCsrf;
    //var xsrfToken = '7afe146e-db59-45c2-9218-f058ef6ae2c7';
    //postObj1["headers"]["X-XSRF-TOKEN"] = xsrfToken;
    console.log("silverpeak postObj1--", JSON.stringify(postObj1));
            var objToReply = {};
            objToReply.statusCode = "";
            objToReply.statusMessage = "";
            objToReply.body = null;
            request(postObj1,(error, response, body)=>{
                if(error) 
                {
                    console.log(error);
                   // return res.send(error);
                }
                try {
                    objToReply.statusCode = response.statusCode;
                } catch(e) {
                    console.log(e.message);
                }
                try {
                    objToReply.statusMessage = response.statusMessage;
                } catch(e) {
                    console.log(e.message);
                }
                try {
                    objToReply.body = response.body;
                    objToReply.body = JSON.parse(response.body);
                } catch(e) {
                    console.log(e.message);
                }
                console.log("objToReply----------",objToReply);
                //return res.send(objToReply);
            });
        });


}
appliances();
