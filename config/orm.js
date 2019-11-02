var connection = require('./connection')

var orm = {
    selectAll: function(callBack){
        var queryString = 'SELECT * FROM burgers;';
        connection.query(queryString, function (err, result){
            if (err) throw err;
            console.log(result)
            callBack(result)
        })
    },
    
    insertOne: function(burger_name, callBack) {
        var queryString = 'INSERT INTO burgers SET ?;';
        connection.query(queryString, {burger_name: burger_name}, function (err, result){
            console.log("insert: " + result)
            if(err) throw err;
            callBack(result)
        })
    },

    devourOne: function(id, callBack) {
        var queryString = 'UPDATE burgers SET ? WHERE ?';
        connection.query(queryString, [{devoured: true}, {id: id}], function (err, result){
            console.log("update: " + result)
            if(err) throw err;
            callBack(result)
        })
    },

    reorderOne: function(id, callBack) {
        var queryString = 'UPDATE burgers SET ? WHERE ?';
        connection.query(queryString, [{devoured: false}, {id: id}], function (err, result){
            console.log("update: " + result)
            if(err) throw err;
            callBack(result)
        })
    },

    deleteOne: function(id, callBack) {
        var queryString = 'DELETE FROM burgers WHERE ?;';
        connection.query(queryString, {id: id}, function (err, result){
            console.log(result)
            if(err) throw err;
            callBack(result)
        })
    },
};

module.exports = orm;
