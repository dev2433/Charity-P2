// Require the dababase so that users can be manipulated in our database.
var db = require('../models')

module.exports = function(app) {


  app.post('/create_newUser', function(req, res) {
    console.log(req.body);

  })
}
