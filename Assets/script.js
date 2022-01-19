// Using moment.js for time/date instead of native javascript
var today = moment();
// Using moment.js to display current date at the top of the application page
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));
