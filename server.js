var express = require("express");
var path = require("path");

var app = express();
var PORT = 8080;



app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});