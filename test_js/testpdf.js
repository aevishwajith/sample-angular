const express = require('express');
const bodyParser = require('body-parser');
const fs = require("fs");
var puppeteer=require("puppeteer");
const admz = require('adm-zip')
const app = express("express");
app.use(express.json());
app.use(bodyParser.json());
// #1f2021
app.get('/pdf',async function(req,res){
    var htmlstr = "<html><body Align='Left'></br><p> <font size='12'>Hello World</p></font> </body></html>";
    var orderid = 'order123'
    var linkid ='link123';
    var todayDateTime = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Kolkata"
    });
    var tempdate = todayDateTime.split(",")[0];
    var datearr = tempdate.split("/");
    var tdate = (datearr[1].length > 1) ? datearr[1] : "0" + datearr[1];
    var tmonth = (datearr[0].length > 1) ? datearr[0] : "0" + datearr[0];
    var tyear = datearr[2].substring(2, 4);
    var filedate = tdate + tmonth + tyear
    var pdfname = orderid + "_" + linkid + "_" + filedate + "_gir.pdf";
   // var dirpath = "/tmp/SD_" + orderid;
    fs.writeFile('/tmp/testhtml.html', htmlstr, async err => {
        if (err) {
            console.error(err);
        }
        var pdfBuffer = await pdfgeneration();
        console.log("pdfBuffer---", pdfBuffer)
        fs.writeFile('/tmp/'+ pdfname, pdfBuffer, function(writeError) {
            if (writeError) {
                return res
                    .status(500)
                    .json({
                        message: "Unable to write file. Try again."
                    });
            }

            //var resbase64 = pdfBuffer.toString('base64');
            res.set('Content-Type','application/pdf');
           res.set('Content-Disposition',"attachment; filename=downloaded_file.pdf");
           res.set('Content-Length',pdfBuffer.length);
           res.send(pdfBuffer);

        })
        
        //console.log(resbase64);

        

    });
	
       
})
async function pdfgeneration(){
	const content = fs.readFileSync('/tmp/testhtml.html','utf-8'
        )
		const browser = await puppeteer.launch({ headless: true })
        const page = await browser.newPage()
        await page.setContent(content)
        const buffer = await page.pdf({
            format: 'A4',
            printBackground: true,
            margin: {
                left: '0px',
                top: '0px',
                right: '0px',
                bottom: '0px'
            }
        })
                await browser.close()
                console.log(buffer);
                return new Promise(resolve => {
                  resolve(buffer);
                });
}
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("Server running on port " + PORT))