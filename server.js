

/**
 * Created by Sai on 4/3/2016.
 */
var http = require("http");
var express = require("express");
var app = express();
var client = require("twilio")("AC693a6e90de748995bb170edbea79f673","a4299122ff0ae0ab17b2ec42ecb9c8f4");


// client.sendMessage({
//    to:'+16183039632',
//     from:'+16185650798',
//     body:'Your current address is updated on your request'
// },function(err, responseData){
//     if (!err) { // "err" is an error received during the request, if any

        // "responseData" is a JavaScript object containing data received from Twilio.
        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
        // http://www.twilio.com/docs/api/rest/sending-sms#example-1

        // console.log(responseData.from); // outputs "+14506667788"
        // console.log(responseData.body); // outputs "word to your mother."
    //
    // }
// });
// var ejsEngine = require("ejs-locals");
// var controllers = require("./controllers");

// Setup the View Engine
// app.set("view engine", "jade");
// app.engine("ejs", ejsEngine); // support master pages
// app.set("view engine", "ejs"); // ejs view engine
// app.set("view engine", "vash");

// app.get("/", function(req,res){
//    res.render("jade/index", {title:"Addvrywhere"});
// });

// set the public static resource folder
// app.use(express.static(__dirname + "/public"));

// Map the routes
// controllers.init(app);

app.get("/", function(req,res){
   res.sendFile(__dirname + "/index.html");
});



app.get("/api/users", function(req,res){
    res.set('Content-Type', 'application/json');
    res.send({name:'Sai', isValid:true, group:'Admin'})

});

var server = http.createServer(app);

server.listen(3000);
