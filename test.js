var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
  res.send("hi");
});

app.listen(80, '139.59.251.145', function(){
 console.log("running");
});
