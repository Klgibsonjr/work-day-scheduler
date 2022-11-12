// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  //
  let today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D YYYY'));

  let saveBtn = $('.saveBtn');

  saveBtn.on('click', function () {
    $(this).siblings('.description').get(0).value;
    let calenderText = $(this).siblings('.description').get(0).value;
    localStorage.setItem($(this).parent().attr('id'), calenderText);
  });

  let businessHour = [9, 10, 11, 12, 13, 14, 15, 16, 17];

  for (i = 0; i < businessHour.length; i++) {
    let eventStorage = localStorage.getItem('hour-' + businessHour[i]);
    let hourTextArea = document.querySelector('#hour-' + businessHour[i] + ' > .description');
    hourTextArea.textContent = eventStorage;
  }

  let currentHour = dayjs().hour();

  for (i = 0; i < businessHour.length; i++) {
    if (businessHour[i] < currentHour) {

});

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: (If..else statement) Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
// let calenderHours =

//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.

// Logic for if...else statement to apply past, present, and future
// if [i] is less than itself = past
// if [i] is greater than itself = future
// if [i] is equal to itself = present
