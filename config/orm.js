var connection = require('./connection')

var orm = {
    selectAll: function(callBack){
        var queryString = 'SELECT * FROM burgers';
        connection.query(queryString, function (err, result){
            if (err) throw err;
            callBack(result)
        })
    },
    
    insertOne: function(callBack) {
        var queryString = 'INSERT INTO burgers SET ?';
        connection.query(queryString, {burger_name: burger_name}, function (err, result){
            console.log(result)
            if(err) throw err;
            callBack(result)
        })
    },

    updateOne: function(id, callBack) {
        var queryString = 'UPDATE burgers SET ? WHERE id = ?';
        connection.query(queryString, [{devour: devour}, {id: id}], function (err, result){
            if(err) throw err;
            console.log(result)
            callBack(result)
        })
    },
};

module.exports = orm;
