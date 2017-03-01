var express = require("express");
var app = express();
var fs =  require("fs");

var jsonbook = {};
app.get("/books", function (req, res) {
  fs.readFile(process.argv[3], function (err, data) {
    if (err) {
      console.log(error);
    }
    res.send(JSON.stringify(JSON.parse(data)));

  });
})

app.listen(process.argv[2]);
