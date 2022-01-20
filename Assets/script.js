$(document).ready(function () {
  $(".btn").on("click", function () {
    var activity = $(this).parent().siblings(".description").val();
    var timeId = $(this).parent().parent().attr("id");
    console.log("clicked save button");
    console.log(timeId, activity);
    localStorage.setItem(timeId, activity);
  });

  //Get values from local storage and add to page when loads
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));

  // Using moment.js for time/date instead of native javascript
  var today = moment();
  // Using moment.js to display current date at the top of the application page
  $("#currentDay").text(today.format("dddd, MMMM Do YYYY"));
});
