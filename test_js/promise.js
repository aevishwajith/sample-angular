var func1=new Promise((resolve,reject)=>{
    var name="vishwa";
   setTimeout(()=>{
     resolve(name);
   },2000)
})
function func2(req){
    //console.log(req);
    //var promise=new Promise();
    if(req=="vishwa"){
       // console.log("yes");
        return ("manager");
    }else{
        return ("employer");
    }
}

func1
.then((res)=>{
var final=func2(res);
console.log(final);
return final;
})
.then((res1)=>{
   console.log("res1",res1);
})