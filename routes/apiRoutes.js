// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Grabbing our models

var db = require("../models");
var isAuthenticated = require('../config/isAuthenticated');
var axios = require("axios");
var charitybaseurl = `https://api.data.charitynavigator.org/v2/Organizations?app_id=${process.env.charityNavigator_app_id}&app_key=${process.env.charityNavigator_app_key}`;

// Routes
// =============================================================
module.exports = function(app) {


  app.post("/api/org/zipcode", function(req, res) {
    // Remember that the data coming thru this request is going to come
    // of the req.params object.

    let zip = req.body.zipcode;
    console.log(zip)

    axios({
      method:'get',
      // url: charitybaseurl+'&zip=' +req.params.zip + '&category=' +req.params.category,
      url: `${charitybaseurl}&zip=${zip}`,
      responseType:'json' //req.params.zip
    })
      .then(function(response) {
        //console.log(response.data)
      res.render('charities', {items: response.data})
        // res.json(response.data)
    });
  });

  app.get("/localOrgs", function(req, res) {
    // Use the Sequelize ORM to query the database for all charities stored.
    db.charity.findAll({}).then((charities) => {
      // console.log(charities)
      // res.json(charities)


      res.render('dallasOrgs', { allCharities: charities });
    })

    // var categories = ["first", "second", "third"];
    // res.json(categories);
  });

  app.get("/adder", function(req, res) {
    res.render('adder');
  })



  // POST route
  app.post("/adder", isAuthenticated, function(req, res) {
    console.log(req.body.category)
    db.charity.create({
      name: req.body.charityName,
      url_image: req.body.charityImage,
      url: req.body.url,
      phone_number: req.body.phone_number,
      city: req.body.city,
      state: req.body.state,
      zipcode: req.body.zipcode,
      category: req.body.category,
      description: req.body.description
    }).then(function(dbCharity) {
      // Redirecting to dallasOrgs does not make the call to the database and
      // re-render the charities. Will have to address that issue.
      res.render('home', {success_msg: "Your charity has been added!"});
    })

  });

  app.post("/api/user-charity", function(req, res) {
    //var opp = req.body.something
    console.log('req.user: ', req.user);
   // console.log('req.body: ', req.body);
    db.favorite_charity.findOrCreate({where: {name: req.body.name}})
    .then(function(charity) {
      //console.log('charity[0]', charity[0]);
      db.UserFavoriteCharity.findOrCreate({
        where: {
          favoriteCharityId: charity[0].dataValues.id,
          UserId: req.user.id
        }})
    });

  });


  // PUT route for
  // app.put("/api/todos", function(req, res) {

  // });
};
