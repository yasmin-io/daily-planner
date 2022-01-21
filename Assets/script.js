// Everything will load on the page at the same time
$(document).ready(function () {
  // 'Save' button function
  $(".btn").on("click", function () {
    // The current block you are saving from will save your notes to your local storage.
    var activity = $(this).parent().siblings(".description").val();
    var timeId = $(this).parent().parent().attr("id");

    localStorage.setItem(timeId, activity);
  });

  // A function to check the current time to load the corresponding colors.
  function timeCheck() {
    // Using Moment will help update the current hour.
    var currentHour = moment().hours();

    $(".input-group").each(function () {
      // We iterate over every block of time - each block is 'this' when it is
      // - its turn to have the function ran on it.
      var inputGroupId = $(this).attr("id");
      var timeForInputGroup = parseInt(inputGroupId);

      // Alter the colors to match the corresponding time using bootstrap utility classes.
      if (timeForInputGroup < currentHour) {
        // Add these classes and attributes if the current time has past for this block.
        $(this)
          .children(".description")
          .addClass("bg-danger text-white")
          .attr("style", "--bs-bg-opacity: .5;");
      } else if (timeForInputGroup === currentHour) {
        // Add these classes and attributes if the time block corresponds with the current hour.
        $(this)
          .children(".description")
          .addClass("bg-success text-white")
          .attr("style", "--bs-bg-opacity: .5;");
      } else {
        // Add these classes and attributes if the current time has not past for this block.
        $(this)
          .children(".description")
          .addClass("bg-warning text-dark")
          .attr("style", "--bs-bg-opacity: .5;");
      }
    });
  }

  // Run checks on hours vs current hour before loading from local storage.
  timeCheck();

  // Get the values from local storage and add them to the page when it loads.
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));

  // Set interval for modifying past, present and future classes on elements regularly.
  var interval = setInterval(timeCheck, 30000);

  // Using moment.js for time/date instead of native javascript.
  var today = moment();
  // Using moment.js to display current date at the top of the application page
  $("#currentDay").text(today.format("dddd, MMMM Do YYYY"));
});
