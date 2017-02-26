var express = require('express');
var app = express();
var path = require("path");

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname+'/index.html');
});
app.get('/gridview', function(req, res) {
  res.sendFile(__dirname+'/gridview.html');
});

var server = app.listen(3000, function () {
 var host = server.address().address;
 var port = server.address().port;

  console.log('Example app listening on port 3000!')
});
