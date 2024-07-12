var readexcel=require('read-excel-file/node');
var Excel=require('exceljs');
var result=[];
//readinf excel file
readexcel('./signoff_toupload.xlsx').then((data)=>{
    
    for(var i in data){
        var obj={};
        console.log(data[i]);
       for(j in data[i]){
        if(i>0){
          obj[data[0][j]]=data[i][j];
          
        }
        //console.log(data[i][j]);
       }
       if(i>0){
       result.push(obj);
       }
    }
    console.log(result);
    //writing excel file
    var workbook = new Excel.Workbook();
    var worksheet=workbook.addWorksheet('Sample Excel');
    var worksheetcol=[];
    var keyobj=result[0];
    for(var key in keyobj){
        var colobj={};
        colobj.key=key;
        colobj.header=key;
        worksheetcol.push(colobj);
    }
    //console.log(worksheetcol);
    worksheet.columns=worksheetcol;
    result.forEach((item)=>{
       worksheet.addRow(item);
    })
   // var exportpath="./MyExcelTest.xlsx";
   // workbook.xlsx.writeFile(exportpath);
})
