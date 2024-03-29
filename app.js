const express = require("express");
const app = express();
const faker = require("faker");
app.set("view engine", "ejs");
app.use(express.static("public")); //folder for images, css, js
app.use('/public', express.static('public'));

//routes

app.get("/unMap", function(req, res) {
    res.render("unMap.ejs");
});

app.get("/vector", function(req, res) {
    var vec = "Vector: ";
    for(var i = 0; i < 4; i++) {
        vec += faker.name.findName() + ", ";
    }
    console.log(vec);
    
    res.render("vector.ejs",  {"vecNames":vec});
});

app.get("/queue", function(req, res) {

    
    
    res.render("queue.ejs");
});


app.get("/", function(req, res) {
    res.render("index.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express Server is running...");
});
    