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

app.listen(port, console.log(successMesssage))