var ipam = require('../../services/ipam');

var multer = require('multer');
var upload = multer();

var log = null;

var setLogger = function(_loggerObj) {
	log = _loggerObj;
	ipam.setLogger(_loggerObj);
}

var setRoutes = function(app) {
	//ipam
	app.get('/_ipam/ipamTest', ipam.ipamTest);
	app.post('/_ipam/getSubnets', ipam.getSubnets);
	app.post('/_ipam/getSubnetDetails', ipam.getSubnetDetails);
	app.post('/_ipam/getSubnetChilds', ipam.getSubnetChilds);
}

module.exports.setRoutes = setRoutes;
module.exports.setLogger = setLogger;
