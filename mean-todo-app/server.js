var express = require('express');
var app = express();

//tie to a port number 3000 for local host
var PORT = process.env.PORT || 3000;
//app route any rout

app.all('\*', function(req,res) {
	res.send('\
		<!DOCTYPE html>\
		<html>\
			<head>\
			<title>MEAN ToDO App</title>\
			</head>\
			<body>\
				<h1>Hello, this is the app</h1>\
				<script src="bundle.js"></script>\
			</body> \
		</html>\
		');

});

app.listen(PORT, function() {
	console.log('Server running on' + PORT);
});