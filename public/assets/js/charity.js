


$(document).ready(function(){
  console.log("jquery is loaded in the page")

  // Stored a reference to the button in the home page to get DFW Charities
  let getCharities = $('.dfw-charities');

  // Stored reference to DOM node #charity_zipcode to grab the user submitted
  // zipcode.
  let userZipcode = $('#charity_zipcode')

  userZipcode.on('keyup', function(e) {
    if (e.keyCode === 13) {
      let zipcode = $(this).val().trim();

      // Make get request /api/org/:zipcode---we are passing the zipcode to the
      // server
      $.get("/api/org/" + zipcode)
        .then((charities) => {
          console.log(charities)
        })
    }

  })

  // Add event listener to getCharities button.
  // getCharities.on('click', function() {
  //   // Make asynchrounous request to our api to get charities stored in
  //   // our datastore.
  //   $.get('/api/charities/', function(charities) {
  //     console.log(charities)
  //   });
  // });






})
