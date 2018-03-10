


module.exports = function(req, res, next) {
  // Check to see if the user is logged in.
  if (req.user) {
    // If the user is logged in, continue to the next function in the
    // middleware stack.
    next();
  } else {
    // If not user, send user back to the home page.
    // This is a great place to let the user know they need to logged in.
    res.render('login', {error_msg: 'Please log in.'})
  }
};
