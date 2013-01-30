var express = require('express');
var app = express();

app.use("/css", express.static(__dirname + '/application/css'));

app.get('/', function(req, res){
  res.send('hello world');
  console.log( req.toString() )
});

app.listen(3333);