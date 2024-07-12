  var mat=[[1,2,3,4,100],
  [5,6,7,8,101],
  [9,10,11,12,102]];
  /*var mat=[[1,2,3,13],
  [4,5,6,14],
  [7,8,9,15],
  [10,11,12,16]];*/
  
  spiralmat(mat);
function spiralmat(mat){
   var startrow=0;
   var endrow=mat.length-1;
   var startcol=0;
   var endcol=mat[0].length-1;
 while(startrow<=endrow && startcol<=endcol){ 
   for(var i=startcol;i<=endcol;i++){
      console.log(mat[startrow][i]);
   }
   startrow++;
   for(var i=startrow;i<=endrow;i++){
    console.log(mat[i][endcol]);
   }
   
  endcol--;
   for(var i=endcol;i>=startcol;i--){
      console.log(mat[endrow][i]);
   }
  
  endrow--;
   for(var i=endrow;i>=startrow;i--){
    console.log(mat[i][startcol]);
   }
   startcol++;
}
}