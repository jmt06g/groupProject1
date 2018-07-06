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
        var data = []
        $.ajax({
                method: 'GET',
                dataType: 'jsonp',
                url: 'https://jobs.github.com/positions.json?description=python',
              }).then(function(response){
                  data = response
                  console.log(data)
          })
        console.log(data[0])})
     

