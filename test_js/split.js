var str="12.10.7.8";
var tosplit=".";
var splitarr=[];
var substr="";
for(var i=0;i<str.length;i++){
    
    if(str[i]!=tosplit){
        substr+=str[i];
    }else{
        splitarr.push(substr);
        substr="";
    }
   

}
splitarr.push(substr);
console.log(splitarr);