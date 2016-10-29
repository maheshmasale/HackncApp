<<<<<<< HEAD
var express = require("express");
var http = require("http");
var app = express();
var path = require("path");
var list = require('./request.js').Request;
var logger = require("morgan");

var request_1 = require('superagent');

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/views/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/views/about.html'));
});

app.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/views/sitemap.html'));
});

app.get('/request', function(req, response){
    // run your request.js script
    // when index.html makes the ajax call to www.yoursite.com/request, this runs
    // you can also require your request.js as a module (above) and call on that:
    //res.send(list.getList()); // try res.json() if getList() returns an object or array
    console.log("called");
    request_1.get('http://api.reimaginebanking.com/atms?key=4495856d0c2b6947ae81b8ab48802308').end(function(res){
	    console.log(res.status);
	    console.log(res.body); //do something
	});

});

app.get("*", function(request, response) {
  response.end("Saaale galat URL hai ye");
});

http.createServer(app).listen(1337);
=======
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
>>>>>>> 677ce73efcc31a07070697b1bf1eec0ac78de774
