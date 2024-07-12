var express= require('express');
var bodyParser=require('body-parser');
var MongoClient=require('mongodb').MongoClient;
const app=express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
var url="mongodb://localhost:27017/";
MongoClient.connect(url,function(err,db){
   if(err) throw err; 
   console.log('connection created');
   var dbo=db.db('AllInOne');
app.get('/',function(req,res){
    res.send("Hello World");
})
app.get('/users',function(req,res){
   dbo.collection('items').find().toArray(function(err,result){
    if(err)throw err;
    console.log("res",result);
    res.send(result);
    db.close();
   })

})
app.post('/signupuser',function(req,res){
    //console.log(req.body);
    var insertObj={"Name":req.body.name,"Email":req.body.email,"Password":req.body.password}
    dbo.collection('Users').insertOne(insertObj,function(err,result){
        if(err) throw err;
        res.send({"res":"user created"});
        //db.close();
    })
})
app.post('/loginuser',function(req,res){
    //console.log(req.body);
    var search_query={"Email":req.body.email,"Password":req.body.password}
    dbo.collection('Users').find(search_query).toArray(function(err,result){
        if(err)throw err;
        if(result.length>0){
            console.log({"status":"success","user":result[0].Name,"userid":result[0]["_id"]})
            res.send({"status":"success","user":result[0].Name,"userid":result[0]["_id"]});
        }else{
           res.send({"status":"failure"});  
        }
    })
})
app.get('/offerimages',function(req,res){
   
    dbo.collection('Offers').find().toArray(function(err,result){
        if(err)throw err;
        res.send(result);
    })
})

app.get('/showitems',function(req,res){
   var category=req.query.category;
   console.log("category--",category);
    dbo.collection('Items').find({category:category}).toArray(function(err,result){
        if(err)throw err;
        res.send(result);
    })
})

app.post('/filtertedItems',function(req,res){
    var category=req.body.category;
    var pricerange=req.body.pricerange;
    var pricestart=parseInt(pricerange.split("-")[0]);
    var priceend=parseInt(pricerange.split("-")[1]);
    console.log(pricestart+"--"+priceend);
    dbo.collection('Items').find({category:category,"price":{$gte:pricestart,$lte:priceend}}).toArray(function(err,result){
        if(err)throw err;
        console.log(result);
        res.send(result);
    })
 })

 app.post('/addcartItems',function(req,res){
    var insertObj = {"Category":req.body.category,"Company":req.body.company,"Img":req.body.img,"Price":req.body.price,"Value":req.body.value,"Itemid":req.body.itemid,"Userid":req.body.userid};
    dbo.collection('allinone_cart').insertOne(insertObj,function(err,result){
        if(err) throw err;
        dbo.collection('allinone_cart').find({/*"Itemid":req.body.itemid,*/"Userid":req.body.userid}).toArray(function(err,cartitem){
           res.send(cartitem);
        })

        //db.close();
    })

 })

 app.post('/getCartItems',function(req,res){
    console.log({"Userid":req.body.userid})
    dbo.collection('allinone_cart').find({"Userid":req.body.userid}).toArray(function(err,cartitem){
        var resobj={};
        resobj.cartlen = cartitem.length;
        res.send(cartitem);
    })
 })

});
app.listen(3000,function(){
    console.log("listening on 3000");
})