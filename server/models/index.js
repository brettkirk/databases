var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function () {
      // var dbConnection = mysql.createConnection({
      //     user: 'root',
      //     password: 'plantlife',
      //     database: 'chat'
      //   });
      //   dbConnection.connect(function(err){
      //     if (err) throw err
      //       dbConnection.query('INSERT INTO messages (user_id, text, room_id) VALUES (?,?,?)', [18, req.body.message, 2], function(err, result) {
      //         if (err) throw err
      //         dbConnection.query('SELECT * FROM messages', function(err, results) {
      //           if (err) throw err
      //           console.log(results[0].text);
      //         })
      //       })
      //     // }
      //   // })
      // })
      // res.end('much win!');
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};
