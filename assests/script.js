$(function () {
  // Displays the current date at the top of the calendar
  let today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D, YYYY'));

  // Sets a variable for the save button DOM element
  let saveBtn = $('.saveBtn');

  // Added an event listener to the save button, that saved the input of the text area to the local storage
  saveBtn.on('click', function () {
    $(this).siblings('.description').get(0).value;
    let calenderText = $(this).siblings('.description').get(0).value;
    localStorage.setItem($(this).parent().attr('id'), calenderText);
  });

  // Declared a variable for the hours array on scheduler
  let businessHour = [9, 10, 11, 12, 13, 14, 15, 16, 17];

  // For statement used to get the items out of local storage and leave them desplayed on the screen, even after the page is refreshed.
  for (i = 0; i < businessHour.length; i++) {
    let eventStorage = localStorage.getItem('hour-' + businessHour[i]);
    let hourTextArea = $('#hour-' + businessHour[i] + ' > .description');
    hourTextArea.textContent = eventStorage;
  }

  // Declared a variable for the the current hour to use in our for statement
  let currentHour = dayjs().hour();

  // For statement used to add the past (grey), present (red) and future (green) classes to change the color of the various time blocks based on the current time.
  for (i = 0; i < businessHour.length; i++) {
    if (businessHour[i] < currentHour) {
      $('#hour-' + businessHour[i]).addClass('past');
    } else if (businessHour[i] > currentHour) {
      $('#hour-' + businessHour[i]).addClass('future');
    } else {
      $('#hour-' + businessHour[i]).addClass('present');
    }
  }
});
