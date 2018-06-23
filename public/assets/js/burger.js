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
    updateBurger(clickedBtnId.substring(0, clickedBtnId.indexOf("_")), 1);
  });

  $("#devourList").on("click", "button.likeBtns", function(e) {
    e.stopPropagation();
    let clickedBtnId = $(this).attr("id");
    console.log(clickedBtnId.substring(0, clickedBtnId.indexOf("_")));
    updateBurger(clickedBtnId.substring(0, clickedBtnId.indexOf("_")), 0);
  });
});

function updateBurger(clickedBtnId, like) {
  var data = {
    devoured: like
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
      var card = $("<div>");
      card.addClass("card burgerDivs text-center");

      var cardBody = $("<div>");
      cardBody.addClass("card-body");

      var cardTitle = $("<div>");
      cardTitle.text(res[i].burger_name);
      cardTitle.addClass("card-title");

      var likeBtns = $("<button>");
      likeBtns.addClass("btn likeBtns");

      if (res[i].devoured === 0) {
        likeBtns.addClass("btn-success");
        likeBtns.text("devour");
        likeBtns.attr("id", i + 1 + "_devour");
        $("#burgersList").append(card);
      } else {
        likeBtns.addClass("btn-warning");
        likeBtns.text("do-it-again");
        likeBtns.attr("id", i + 1 + "_devour");
        $("#devourList").append(card);
      }
      cardBody.append(cardTitle);
      cardBody.append(likeBtns);
      card.append(cardBody);
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
