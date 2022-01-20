// having everything inside this function helps everything on
//the page load together
$(document).ready(function () {
  $(".btn").on("click", function () {
    var activity = $(this).parent().siblings(".description").val();
    var timeId = $(this).parent().parent().attr("id");
    console.log("clicked save button");
    console.log(timeId, activity);
    localStorage.setItem(timeId, activity);
  });

  function timeCheck() {
    //use moment to get the current hour
    var currentHour = moment().hours();

    $(".input-group").each(function () {
      //we iterate over every block of time - each block is 'this' when it is its turn to have the function ran on it
      var inputGroupId = $(this).attr("id");
      var timeForInputGroup = parseInt(inputGroupId);

      if (timeForInputGroup < currentHour) {
        $(this)
          .children(".description")
          .addClass("bg-info text-white")
          .attr("style", "--bs-bg-opacity: .5;");
      } else if (timeForInputGroup === currentHour) {
        //add styling for the present hour
      } else {
        //add styling for future
      }
    });
  }

  //run check on hours vs current hour before loading from local storage

  timeCheck();
  //Get values from local storage and add to page when loads
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));

  //set interval for modifying past, present and future classes on elements
  var interval = setInterval(timeCheck, 30000);

  // Using moment.js for time/date instead of native javascript
  var today = moment();
  // Using moment.js to display current date at the top of the application page
  $("#currentDay").text(today.format("dddd, MMMM Do YYYY"));
});
