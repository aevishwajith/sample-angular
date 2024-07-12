var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";
MongoClient.connect(url,function(err,db){
  if(err){
    console.log(err);
  }else{
    var insertobj=[
        {img:"assets/mob1.jpg",desc:"Redmi Mobile 8A-2GB RAM-16GB Strorage-8mp rear and back"},
        {img:"assets/home1.jpg",desc:"Kitchen set-juicer-4plates-Stove-Pan"},
        {img:"assets/mob2.jpg",desc:"Redmi Mobile 9A-2GB RAM-16GB Strorage-8mp rear and back"},
        {img:"assets/mob1.jpg",desc:"Redmi Mobile Note 8A-2GB RAM-16GB Strorage-8mp rear and back"},
        {img:"assets/book1.jpg",desc:"Books-ponniyin selvan"},
        {img:"assets/book1.jpg",desc:"Orgin of shiva"},
        {img:"assets/book1.jpg",desc:"Books-ponniyin selvan"},
        {img:"assets/book1.jpg",desc:"Books-ponniyin selvan"}
       
        
      ]
    var dbo=db.db("AllInOne");
    dbo.collection("Offers").insertMany(insertobj,function(err,res){
       if(err){
        console.log(err);
       }else{
        console.log("inserted");
        db.close();
       }
    })
  }  
})