$(document).ready(function() {
  console.log("ready!");
  loadSavedBurgers();
  $("#addBurgerBtn").on("click", function() {
    var burgerName = $("#addBurgerInput")
      .val()
      .trim();
    console.log(burgerName);
    addBurger(burgerName);
  });

  $("#burgersList").on("click", "button.likeBtns", function(e) {
    e.stopPropagation();
    let clickedBtnId = $(this).attr("id");
    console.log(clickedBtnId.substring(0, clickedBtnId.indexOf("_")));
    updateBurger(clickedBtnId.substring(0, clickedBtnId.indexOf("_")));
  });
});

function updateBurger(clickedBtnId) {
  var data = {
    devoured: 1
  };
  console.log("updateBurger");
  $.ajax({
    url: "/api/burger/" + clickedBtnId,
    type: "PUT",
    dataType: "json",
    contentType: "application/json",
    data: JSON.stringify(data)
  }).then(function(response) {
    console.log(response);
    location.reload();
  });
}

function loadSavedBurgers() {
  $.ajax({
    url: "/api/burgers",
    type: "GET"
  }).then(function(res) {
    console.log(res);
    for (let i = 0; i < res.length; i++) {
      if (res[i].devoured === 0) {
        var burger = $("<p>");
        burger.text(res[i].burger_name);
        var likeBtns = $("<button>");
        likeBtns.attr("id", i + 1 + "_devour");
        likeBtns.attr("class", "likeBtns");
        likeBtns.text("like");
        burger.append(likeBtns);
        $("#burgersList").append(burger);
      } else {
        $("#devourList").append("<p>" + res[i].burger_name + "</p>");
      }
    }
  });
}

function addBurger(name) {
  var data = {
    burger_name: name,
    devoured: 0
  };
  $.ajax({
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    url: "/api/burger",
    type: "POST",
    data: JSON.stringify(data)
  }).then(function(res) {
    console.log(res);
    location.reload();
  });
}
