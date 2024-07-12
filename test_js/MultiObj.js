var async = require('async');
function findeligible(cback){
var reqarr=[
    {"name":"vishwa","age":25},
    {"name":"sam","age":23},
    {"name":"tom","age":19}
];
var finalarr=[];
for(var i=0;i<reqarr.length;i++){
    var obj={};
    obj.s=reqarr[i];
    var eligibility=(function(cb){
        var s=this.s;
        
            var myTimeout = setTimeout(()=>{
                var res={};
                if(s.age>20){
                    //console.log("ss--",s)
                   
                    res.message=s.name+" is eligible";
                    

                    
                }else{
                    res.message=s.name+" is not eligible";
                    
                }
                //console.log("res--",res)
                cb(null,res);
              }, 1000);
        
        

    }).bind(obj)
    finalarr.push(eligibility);
     
}
//console.log(finalarr);
async.parallel(finalarr,function(err,result){
    //console.log("result--",result)
    var resparr=[];
   if(err){
    //console.log("err--",err);
   }
    for(var i=0;i<result.length;i++){
        if(!result[i].message.includes('not'))
        resparr.push(result[i]);
    }
    cback(null,resparr);

 })
}
findeligible(function(err,res){
    console.log(res)
});
var res=fineluguble();