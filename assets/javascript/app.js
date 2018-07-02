$(document).ready(function(){
    $("#jobs").append('<li class="list-group-item">2job<a>Company Name</a> <p>Location</p></li>');
    showJob("example title","ex des","ex Cname", "ex apply")

})
function showJob(title, Des, Cname, apply)
{$("#title").text(title);
$("#Des").text(Des);
$("#Cname").text(Cname);
$("#apply").text(apply);
}