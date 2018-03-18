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

//NEW CODE FOR GETTING THE FAVORITE CHARITIES ON HTML

  app.get("/favorites", function(req, res) {
    // Use the Sequelize ORM to query the database for all charities stored.
    // console.log("/n/n"+req.user.id);
    var query = "SELECT FC.name FROM UserFavoriteCharities as UFC JOIN favorite_charities as FC on UFC.favoriteCharityId= FC.id WHERE UFC.UserId = ?";
    db.sequelize.query(query,{replacements:[req.user.id],type: db.sequelize.QueryTypes.SELECT})

      // {where: {UserId: req.user.id}}).
    .then((favorite_charities) => {
      // .findAll{where: {name: req.body.name}} => {
      console.log(favorite_charities)
      res.json(favorite_charities);


});

});

// app.get("/favorites", function(req,res){

//   db.favorite_charity.findAll({where: {name: req.body.name}})


// });

    // db.User.findAll({where: {UserId: req.body.id}, 

    //   include: [
    //     {
    //       model: db.UserFavoriteCharity,
    //       include: [
    //       {
    //           model: favorite_charity
    //         }
    //       ]
    //     }
    //   ]
    // }).then((favorite_charities) => {
    //   console.log(favorite_charities)
    //   res.json(favorite_charities);

    //   // res.render('favorites', { allCharities: favorite_charities });
    // });


  app.get('/User', (req,res) =>{
    db.User.findAll({
      include: [
        {
          model: db.UserFavoriteCharity,
          include: [
          {
            model: favorite_charity
          }
        ]
      }
    ]
  }).then(User =>{
    const resObj = User.map(user => {

    //tidy up the user data
    return Object.assign(
      {},
      {
        User_id: User.id,
        email: User.email,
        UserFavoriteCharity: User.UserFavoriteCharity.map(UserFavoriteCharity => {

         //tidy up the userFavoriteCharity data
         return Object.assign(
            {},
            {
              UserFavoriteCharity_id: UserFavoriteCharity.id,
              UserId: UserFavoriteCharity.UserId,
              favorite_charity: UserFavoriteCharity.favorite_charity.map(favorite_charity => {

                //tidy up the favorite_charity data
                return Object.assign(
                  {},
                  {
                    favorite_charity_id: favorite_charity.id,
                    name: favorite_charity.name
                  }
                )
              })
            }
            )
         }) 
      }
    )
});
    
res.json(resObj)

  });
});

  //END OF NEW CODE

  app.get("/localOrgs", function(req, res) {
    // Use the Sequelize ORM to query the database for all charities stored.
    db.charity.findAll({}).then((charities) => {
      // console.log(charities)
      // res.json(charities)


      res.render('dallasOrgs', { allCharities: charities });
    })

   
  });

  app.get("/adder", function(req, res) {
    res.render('adder');
  })



  // POST route
  app.post("/api/opportunity", function(req, res) {
    var opp = req.body.something

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

};

