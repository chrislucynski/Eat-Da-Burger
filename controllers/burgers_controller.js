var express = require('express');
var app = express();
var orm = require('./config/orm')

module.exports = function(app){
    app.get("/", function(req, res) {
        orm.selectAll()
        res.render("index", { burgers: data });
    });
      
    app.post("/api/burgers", function(req, res) {
        orm.insertOne()
        // res.render("single-quote", data[0]);
    });
      
    app.post("/api/burgers", function(req, res) {
        orm.updateOne()
        res.json({ id: result.insertId });
    });
}