var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/app/public'));

// app.get('/', function(req, res){
//     res.sendFile(path.join(__dirname, "/app/public/home.html"));
// });

// app.get('/survey', function(req, res){
// });

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});