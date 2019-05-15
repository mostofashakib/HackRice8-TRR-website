var express        = require("express"),
    app            = express(),
    bodyParser     = require("body-parser"),
    cookieParser   = require("cookie-parser"),
    methodOverride = require("method-override");
    
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride('_method'));
app.use(cookieParser('secret'));


// Restful routing

app.get("/", function(req, res){
    res.render("index");
});

// contact

app.get("/contact", function(req, res){
    res.render("contact");
});

// privacy policy


app.get("/policy", function(req, res){
    res.render("policy");
});

// server Listen 

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The server has started!");
});