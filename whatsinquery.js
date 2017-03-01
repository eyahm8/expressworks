var express = require("express");
var app = express();

app.get('/search', function (req, res) {

  var string = req.query
  res.send(string);
});



app.listen(process.argv[2]);
