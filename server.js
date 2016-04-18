/**
 * Created by Sai on 4/3/2016.
 */
var http = require("http");
var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));


var hb = require("express-handlebars");
app.engine("handlebars", hb());
app.set("view engine", "handlebars");


app.get("/", function(req,res){
   res.render("home", {title: "Hello from Webstorm" , message: "Hi there!"});
});

app.get("/api/getStatus", function(req,res){
   res.status(200);
   res.set("Content-type", "application/json");
   res.send(["H1LCA","Bank","Utilities"]);
});

var server = http.createServer(app);



server.listen(3000);
