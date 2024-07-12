var moment=require('moment');
/*var Timestamp= 1667886519
Timestamp = parseFloat(Timestamp);
Timestamp = moment.unix(Timestamp).format("YYYY-MM-DD HH:mm:ss");
console.log("time---",Timestamp);*/
/*console.log(new Date());
console.log((moment(new Date()).format("YYYY-MM-DD")));
console.log((moment(new Date()).format("yyyy-MM-DD")).toString());*/
var month = "Jan-24"
let reqMonth = moment(month).format('MM');
console.log("month--",reqMonth)
		let reqYear = month.replace('-','-20');
			reqYear = moment(reqYear).format('YYYY');
            console.log("year--",reqYear);