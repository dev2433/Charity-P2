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
  app.get("/api/org", function(req, res) {
    res.send("/api/org\n\n");
    // GET request for remote image
    axios({
      method:'get',
      // url: charitybaseurl+'&zip=' +req.params.zip + '&category=' +req.params.category, 
      url: charitybaseurl+'&zip=12309',
      responseType:'json',//req.params.zip
    })
      .then(function(response) {
      res.send(response.data);
    });
  });

  // POST route 
  app.post("/api/todo", function(req, res) {

  });


  // PUT route for 
  // app.put("/api/todos", function(req, res) {

  // });
};