var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";
MongoClient.connect(url,function(err,db){
   if(err){
    console.log(err);
   }else{
   
    var dbo=db.db("mydb");
    dbo.createCollection("teachers",function(err,res){
        if(err){
          console.log(err);
        }else{
        console.log("collction created");
        }
        db.close();
    })
   }
   
})