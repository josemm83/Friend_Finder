var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static(__dirname, "/app/public"));

require("./app/routing/apiRoutes");
require("./app/routing/htmlRoutes");

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});