

$(function() {
  console.log("You are in the client side sign in js file");

  var signUpForm = $('.signup');
  var emailInput = $('#email-input');
  var passwordInput = $('#password-input');

  signUpForm.on('submit', function(e) {
    e.preventDefault();
    var email = emailInput.val().trim();
    var password = passwordInput.val().trim();

    // A check to make sure the user entered email and password.
    if (!email || !password) {
      return // Set up an error message for the User.
    }

    $.post("/create_newUser", {useremail: email, userpassword: password})
      .then(function(response) {
        console.log(user);
      })
  })



})
