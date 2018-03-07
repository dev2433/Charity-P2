

$(function() {
  console.log("You are in the client side sign in js file");


  $("#logout").on('click', function(e) {
    e.preventDefault();
    console.log("you are clicking")
    $.ajax({
      url: '/logout',
      method: 'GET'
    }).then(function() {
      window.location.reload()
    })
  })



})
