var arr=[4, 7, 3, 6, 7];
var mainarr=[];
mainarr.push(arr);
console.log(arr.length);
while(arr.length>1){
    var tmparr=[];
for(var i=0,j=i+1;j<arr.length;i++,j++){
  
  tmparr.push(arr[i]+arr[j]);
  
}
  mainarr.unshift(tmparr);
  arr=tmparr;
}
console.log(mainarr);