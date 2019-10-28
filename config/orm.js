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
    
    insertOne: function(callBack) {
        var queryString = 'INSERT INTO burgers SET ?;';
        connection.query(queryString, {burger_name: burger_name}, function (err, result){
            if(err) throw err;
            console.log("insert: " +result)
            callBack(result)
        })
    },

    updateOne: function(id, callBack) {
        var queryString = 'UPDATE burgers SET ? WHERE ?;';
        connection.query(queryString, [{devoured: true}, {id:id}], function (err, result){
            if(err) throw err;
            console.log("update: " + result)
            callBack(result)
        })
    },

    // deleteOne: function(id, callBack) {
    //     var queryString = 'DELETE FROM burgers WHERE id = ?;';
    //     connection.query(queryString, [id], function (err, result){
    //         if(err) throw err;
    //         console.log(result)
    //         callBack(result)
    //     })
    // },
};

module.exports = orm;
