var express = require("express"),
    app = express(),
    pug = require("pug"),
    port = 6,
    successMesssage = "Server started at http://localhost:"+port

app.set("view engine", "pug")
app.set("views", __dirname+"/views")

app.get("/", function(req, res){
    res.render("index")
})
app.get("/home", function(req, res){
    res.render("index")
})
app.get("/about", function(req, res){
    res.send('<h1>About Us</h1>')
})
app.get("/contact",function(req,res){
    res.send('<p>123456</p>')
})
app.listen(port, console.log(successMesssage))