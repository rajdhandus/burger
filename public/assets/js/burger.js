$(document).ready(function() {
  $.ajax({
    url: "/api/burgers",
    type: "GET"
  }).then(function(res) {
    console.log(res);
  });
  console.log("ready!");
  $("#addBurgerBtn").on("click", function() {
    console.log(
      $("#addBurgerInput")
        .val()
        .trim()
    );
  });
});
