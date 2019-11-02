var express = require('express');
var app = express();
var orm = require('../config/orm')
var path = require('path')

module.exports = function(app){
    app.get("/", function(req, res) {
        orm.selectAll(function (data){
            res.render("index", { burgers: data });
        })
    });
      
    app.post("/api/burgers", function(req, res) {
        orm.insertOne(req.body.burger_name, function(data){
            res.render('index', {burgers: data})
        })
    });
      
    app.put("/api/devour/:id", function(req, res) {
        orm.devourOne(req.params.id, function(data){
            res.send({ id: data.id });
        })
    });

    app.put("/api/reorder/:id", function(req, res) {
        orm.reorderOne(req.params.id, function(data){
            res.send({ id: data.id });
        })
    });
    
    app.delete("/api/delete/:id", function(req, res) {
        orm.deleteOne(req.params.id, function(data){
            res.send({ id: data.id });
        })
    });

    app.get("/assets/css/burger_style.css", function(req, res) {
        res.sendFile(path.join(__dirname, "..", "public", "assets", "css", "burger_style.css"));
    });

}