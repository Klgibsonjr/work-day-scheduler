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
    let hourTextArea = $('#hour-' + businessHour[i] + ' > .description');
    hourTextArea.textContent = eventStorage;
  }

  let currentHour = dayjs().hour();

  for (i = 0; i < businessHour.length; i++) {
    if (businessHour[i] < currentHour) {
      $('.time-block').addClass('past');
    } else if (businessHour[i] > currentHour) {
      $('.time-block').addClass('future');
    } else {
      $('.time-block').addClass('present');
    }
  }
});
