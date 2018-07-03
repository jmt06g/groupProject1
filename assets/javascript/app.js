var jobs = [
    "JavaScript",
    "FrontEnd",
    "BackEnd",
  ];
  var jobDescription = "";



function createButton() {
    $("#map").empty();
    for (var i = 0; i < jobs.length; i++) {
      var a = $("<button>");
      a.attr("data-jobs", jobs[i]);
      a.text(jobs[i]);
      a.addClass("jobButton");
      a.addClass("btn btn-outline-secondary");
      $("#map").append(a);
    }
  }


    $("#jobButton").on("click", function() {
      var job = $(this).attr("data-jobs");
      var queryURL =
        "https://maps.googleapis.com/maps/api/js?key=" +
        job +
        "AIzaSyD3Zg5J4ZdXMk4EQR45MZNCy6SWjwZEVXc";

  
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        var results = response.data;
      })
    })
