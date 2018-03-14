$("[data-toggle=tooltip]").tooltip();

$("#favorites").on("click", function(e) {
	e.preventDefault();
	console.log(this)


  $.ajax({
      url: "/favorites",
      method: "GET"
    }).done(function(response) {
      console.log(response);


})

