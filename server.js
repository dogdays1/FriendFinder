//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


//create instance of express in a variable
var app = express();

//heroku acceptable port
var PORT = process.env.PORT || 7000;

//code to run or use body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//require exported modules from routing pages
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//turn the server on
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
