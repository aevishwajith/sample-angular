
var q=require("q");

function checkelement(arr,ele){
  var def=q.defer();
  for(var i in  arr){
     if(arr[i]==ele){
         def.resolve("found");
     }
  }
  def.reject('element not found');
  return def.promise;
}
function statusreturn(res,ele){
  
  var def=q.defer();
  if(res=="found" && ele%2==0){
   
    def.resolve("ok");
  }
  def.reject("process failed");
  return def.promise;
}
function test(){
  //console.log("in test");
  var arr=[1,2,4];
checkelement(arr,1).then(function(res){
//console.log("res-->",res)
  return statusreturn(res,1);
})
.then(function(res1){
   console.log("res1--"+res1);
}).catch(function(err){
    console.log("error",err);
})
}
test();