var express = require("express");
var http = require("http");
var app = express();
var path = require("path");
var list = require('./request.js').Request;
var logger = require("morgan");


//var request_1 = require('superagent');

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/views/about.html'));
});

app.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/views/sitemap.html'));
});


app.get('/lib/capital_one.js',function(req,res){
  res.sendFile(path.join(__dirname+'/lib/capital_one.js'));
});


app.get('/lib/require-jquery.js',function(req,res){
  res.sendFile(path.join(__dirname+'/lib/require-jquery.js'));
});

app.get('/capitalOneDownloadedData.txt',function(req,res){
  res.sendFile(path.join(__dirname+'/capitalOneDownloadedData.txt'));
});

app.get('/mapPopulation.txt',function(req,res){
  res.sendFile(path.join(__dirname+'/mapPopulation.txt'));
});


app.get('/lib/atm.js',function(req,res){
  res.sendFile(path.join(__dirname+'/lib/atm.js'));
});

app.get('/lib/account.js',function(req,res){
  res.sendFile(path.join(__dirname+'/lib/account.js'));
});


app.get('/lib/bills.js',function(req,res){
  res.sendFile(path.join(__dirname+'/lib/bills.js'));
});


app.get('/lib/branch.js',function(req,res){
  res.sendFile(path.join(__dirname+'/lib/branch.js'));
});


app.get('/lib/customer.js',function(req,res){
  res.sendFile(path.join(__dirname+'/lib/customer.js'));
});


app.get('/lib/deposit.js',function(req,res){
  res.sendFile(path.join(__dirname+'/lib/deposit.js'));
});


app.get('/lib/merchant.js',function(req,res){
  res.sendFile(path.join(__dirname+'/lib/merchant.js'));
});

app.get('/lib/purchase.js',function(req,res){
  res.sendFile(path.join(__dirname+'/lib/purchase.js'));
});

app.get('/lib/transfer.js',function(req,res){
  res.sendFile(path.join(__dirname+'/lib/transfer.js'));
});

app.get('/lib/withdrawal.js',function(req,res){
  res.sendFile(path.join(__dirname+'/lib/withdrawal.js'));
});

app.get("*", function(request, response) {
  response.end("Wrong URL!!");
});



app.listen(process.env.PORT || 5000, function () {
  console.log('Example app listening on port 5000!');
});
