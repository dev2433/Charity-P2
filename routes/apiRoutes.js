// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Grabbing our models

var db = require("../models");
var axios = require("axios");
var charitybaseurl = "https://api.data.charitynavigator.org/v2/Organizations?app_id=1e3a890b&app_key=7ede0f4b1362b28da1719287d4f6e23f";

// Routes
// =============================================================
module.exports = function(app) {


  app.get("/api/org/:zipcode", function(req, res) {
    // Remember that the data coming thru this request is going to come
    // of the req.params object.
    let zip = req.params.zipcode;
    
    axios({
      method:'get',
      // url: charitybaseurl+'&zip=' +req.params.zip + '&category=' +req.params.category,
      url: `${charitybaseurl}&zip=${zip}`,
      responseType:'json' //req.params.zip
    })
      .then(function(response) {
      res.json(response.data)
    });
  });

  app.get("/api/charities/", function(req, res) {
    // Use the Sequelize ORM to query the database for all charities stored.
    db.charity.findAll({}).then((charities) => {
      // console.log(charities)
      res.json(charities)
    })

    // var categories = ["first", "second", "third"];
    // res.json(categories);
  });



  // POST route
  app.post("/api/opportunity", function(req, res) {
    var opp = req.body.something

  });


  // PUT route for
  // app.put("/api/todos", function(req, res) {

  // });
};
