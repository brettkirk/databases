var models = require('../models');
var db = require('../db')
var mysql = require('mysql');

module.exports = {
  messages: {
    get: function (req, res) {
      res.send('hello world')
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // models.messages.post(req, res);
      var dbConnection = mysql.createConnection({
        user: 'root',
        password: 'plantlife',
        database: 'chat'
      });
      dbConnection.connect(function(err){
        if (err) throw err
        dbConnection.query('INSERT INTO messages (user_id, text, room_id) VALUES (?,?,?)', [1, req.body.message, 1], function(err, result) {
          if (err) throw err
          dbConnection.query('SELECT * FROM messages', function(err, results) {
            if (err) throw err
            console.log(results[0].text);
          })
        })
      })
      res.end('much win!');
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      var dbConnection = mysql.createConnection({
          user: 'root',
          password: 'plantlife',
          database: 'chat'
        });
        dbConnection.connect(function(err){
          if (err) throw err
          dbConnection.query('SELECT username FROM users', function(err, results) {
            if (err) throw err
            var flag = true;
            for (var i = 0; i < results.length; i++) {
              if (results[i].username === req.body.username) {
                flag = false;
              }
            }
            if (flag) {
            dbConnection.query('REPLACE INTO users (username) VALUES (?)', req.body.username, function(err, result) {
              if (err) throw err
              dbConnection.query('SELECT * FROM users', function(err, results) {
                if (err) throw err
              })
            })
          }
        })
      })
      res.end('much win!');
    }
  }
};
