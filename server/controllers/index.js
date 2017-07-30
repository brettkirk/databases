var models = require('../models');
var db = require('../db');
var mysql = require('mysql');

module.exports = {
  messages: {
    get: function (req, res) {
      res.send('hello world');
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req, res);
      // var dbConnection = mysql.createConnection({
      //   user: 'root',
      //   password: 'plantlife',
      //   database: 'chat'
      // });
      // dbConnection.connect(function(err) {
      //   if (err) { throw err; }
      //   var user_id = 0;
      //   var room_id = 0;
      //   dbConnection.query('SELECT id FROM users where username = (?)', req.body.username, function(err, results) {
      //     if (err) { throw err; }
      //     user_id = results[0].id;
      //     dbConnection.query('SELECT id FROM rooms where room_name = (?)', req.body.roomname, function(err, results) {
      //       if (err) { throw err; }
      //       room_id = results[0].id;
      //       dbConnection.query('INSERT INTO messages (user_id, text, room_id) VALUES (?,?,?)', [user_id, req.body.message, room_id], function(err, result) {
      //         if (err) { throw err; }
      //         dbConnection.query('SELECT * FROM messages', function(err, results) {
      //           if (err) { throw err; }
      //           console.log(results[0].text);
      //         });
      //       });
      //     })
      //   })
      // });
      // res.end('much win!');
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      models.users.post(req, res);

      // var dbConnection = mysql.createConnection({
      //   user: 'root',
      //   password: 'plantlife',
      //   database: 'chat'
      // });
      // dbConnection.connect(function(err) {
      //   if (err) { throw err; }
      //   dbConnection.query('SELECT username FROM users', function(err, results) {
      //     if (err) { throw err; }
      //     var flag = true;
      //     for (var i = 0; i < results.length; i++) {
      //       if (results[i].username === req.body.username) {
      //         flag = false;
      //       }
      //     }
      //     if (flag) {
      //       dbConnection.query('REPLACE INTO users (username) VALUES (?)', req.body.username, function(err, result) {
      //         if (err) { throw err; }
      //         dbConnection.query('SELECT * FROM users', function(err, results) {
      //           if (err) { throw err; }
      //         });
      //       });
      //     }
      //   });
      // });
      // res.end('much win!');
    }
  }
};
