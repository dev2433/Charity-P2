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

  // GET route 
  // app.get("/api/org/", function(req, res) {
  //   var categories = ["frirst", "second", "third"];
  //   res.json(categories);
  //   // GET request for remote image
  //   axios({
  //     method:'get',
  //     // url: charitybaseurl+'&zip=' +req.params.zip + '&category=' +req.params.category, 
  //     url: charitybaseurl+'&zip=12309',
  //     responseType:'json',//req.params.zip
  //   })
  //     .then(function(response) {
  //     res.send(response.data);
  //   });
  // });

  app.get("/api/categories/", function(req, res) {
    
    db.my_charity.findAll({}).then((data) => {
      res.json(data);
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