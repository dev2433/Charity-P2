// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
var isAuthenticated = require('../config/isAuthenticated')


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/", function(req, res) {
     res.render('home')
  });

  app.get('/profile', isAuthenticated, function(req, res) {
    res.render('profile');
  });

  // This is the route for logging a user in.
  app.get('/login', function(req, res) {
    res.render('login');
  });

  // Update user profile.
  app.get('/update-profile', isAuthenticated, function(req, res) {
    res.render('update-profile');
  })

  // This is the route for signing up.
  app.get('/signup', function(req, res) {
    res.render('signup');
  });

  app.get("/contact", function(req, res) {
     // res.sendFile(path.join(__dirname, "../public/contact.html"));
     res.render('contact');
  });

  app.get("/mission", function (req, res){
     res.sendFile(path.join(__dirname, "../public/mission.html"));
  });

  app.get('/logout', function(req, res) {

    // Passport exposes the logout function on the request object.
    req.logout()
    res.redirect('/')
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
     res.render('home')
  });
};
