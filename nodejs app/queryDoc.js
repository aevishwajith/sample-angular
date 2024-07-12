var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";
MongoClient.connect(url,function(err,db){
  if(err){
    console.log(err);
  }else{
    var dbo=db.db("shopping");
    dbo.collection("items").find({"qty":{"$gt":5}}).toArray(function(err,res){
       if(err){
        console.log(err);
       }else{
        console.log(res);
        db.close();
       }
    })
  }  
})