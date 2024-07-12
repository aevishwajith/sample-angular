  var mat=[
    [1,2,3],
    [4,5,6],
    [7,8,9],

  ];
  spiralmat(mat);
function spiralmat(mat){
   var startrow=0;
   var endrow=mat.length;
   var startcol=0;
   var endcol=mat.length;

   for(var i=startcol;i<endcol;i++){
      console.log(mat[startrow][i]);
   }
   startrow++;
   for(var i=startrow;i<endrow;i++){
    console.log(mat[i][endcol]);
   }
}