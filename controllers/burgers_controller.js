var express = require('express');
var app = express();
var orm = require('../config/orm')

module.exports = function(app){
    app.get("/", function(req, res) {
        orm.selectAll(function (data){
            res.render("index", { burgers: data });
        })
    });
      
    app.post("/api/burgers", function(req, res) {
        orm.insertOne(function(data){
            console.log("insert: " +data)
            res.render('index', {burgers: data})
        })
    });
      
    app.put("/api/burgers/:id", function(req, res) {
        orm.updateOne(function(data){
            console.log("update: " + data)
            // Why are we doing 'res.json()' here instead of 'res.render()'
            res.json({ id: data.id });
        })
    });
    
    // app.post("/api/burgers/:id", function(req, res) {
    //     orm.deleteOne(function(data){
    //         console.log("deleted: " + data)            
    //         // Why are we doing 'res.json()' here instead of 'res.render()'
    //         res.json({ id: res.insertId });
    //     })
    // });
}