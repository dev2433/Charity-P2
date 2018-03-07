// Require the dababase so that users can be manipulated in our database.
var db = require('../models');
var passport = require('../config/passport');





module.exports = function(app) {

  // Logout user.
  app.get('logout', function(req, res) {
    console.log("We got the request")
  })

  // Use Passport to authenticate user upon login.
  app.post('/api/login', passport.authenticate('local',
   {sucessRedirect: '/', failureRedirect: '/login', failureFlash: true}),
   function(req, res) {
     res.redirect('/')
  })

  // Create a new user and save user to the database.
  app.post('/create_newUser', function(req, res) {

    var email = req.body.email;
    var password = req.body.password;
    var password2 = req.body.password2;

    // Validation Check
    req.check("email", "Email is required").notEmpty();
    req.check("email", "Email is not valid").isEmail();
    req.check("password", "Password is required").notEmpty();
    req.check("password2", "Passwords do not match").equals(req.body.password)


    var errors = req.validationErrors();

    if(errors) {
      res.render('signup', {errors: errors})
    } else {
      db.User.create({
        email: req.body.email,
        password: req.body.password
      }).then(function(user) {
        console.log(user);
        // The method below did not flash the succes method upon
        // rendering of the login page.
        // req.flash('success_msg', 'You are now registerd.')
        res.render('login', {success_msg: 'You are now registerd and can login.'});
      }).catch(function(err) {
        console.log(err);
        res.render('home', {error_msg: 'There was a problem creating this account'});
      })
    }
  })


}
