


$(function() {
  console.log("jquery is loaded in the page")

  // Stored a reference to the button in the home page to get DFW Charities
  let getCharities = $('.dfw-charities');

  // Add event listener to getCharities button.
  getCharities.on('click', function() {
    // Make asynchrounous request to our api to get charities stored in
    // our datastore.
    $.get('/api/charities/', function(charities) {
      console.log(charities)
    });
  });






})
