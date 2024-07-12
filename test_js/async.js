var async=require('async');
/*function func1(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(1);
          },3000)
    })
    
}*/
var mypromise = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve(1);
      },3000)
})
async function func2(){
    var c=1+3;
    var res=await mypromise;
    console.log(res);
    console.log(c);
}
/*func1().then(function(res){
    var c=1+3;
    console.log(res);
    console.log(c);
})*/
func2();
