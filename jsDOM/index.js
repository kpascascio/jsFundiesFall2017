var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

//Run on a local port.
http.listen(4000, function(){
	console.log('listening on *:4000');
});

