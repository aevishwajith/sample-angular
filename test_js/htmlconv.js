var pdf2html = require('pdf2html');
var async=require("async");
async function fun1(){
    //const html = await pdf2html.html('./invoice.pdf');
    const html = await pdf2html.meta('./invoice.pdf');
    if (html.err) { console.log('error');}
    else { 
    console.log(html);
}
}
fun1();
