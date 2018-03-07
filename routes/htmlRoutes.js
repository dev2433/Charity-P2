// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/", function(req, res) {
     // res.sendFile(path.join(__dirname, "../public/index.html"));
     res.render('home')
  });

  // This is the route for logging a user in.
  app.get('/login', function(req, res) {
    res.render('login');
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
  })

  app.get('/logout', function(req, res) {
    console.log(req.logout);
    // Passport exposes the logout function on the request object.
    req.logout()
    res.redirect('/')
  })

  // If no matching route is found default to home
  app.get("*", function(req, res) {
     res.render('home')
  });
};
