import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startButton = document.querySelector('[data-start]');
const inputDays = document.querySelector('[data-days]');
const inputHours = document.querySelector('[data-hours]');
const inputMinutes = document.querySelector('[data-minutes]');
const inputSeconds = document.querySelector('[data-seconds]');

let inputDate = '';

startButton.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    inputDate = selectedDates[0];
    let currentDate = new Date().getTime();
    console.log(currentDate);
    if (currentDate >= inputDate) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startButton.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);

startButton.addEventListener('click', () => {
  Notiflix.Notify.success('Timer was started');
  const timer = setInterval(() => {
    // Find the distance between now and the count down date
    let currentDate = new Date().getTime();
    let distance = inputDate - currentDate;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    inputDays.innerHTML = days;
    inputHours.innerHTML = hours;
    inputMinutes.innerHTML = minutes;
    inputSeconds.innerHTML = seconds;

    let loadingMessage = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

    Notiflix.Loading.hourglass(loadingMessage, {
      clickToClose: true,
    });
    Notiflix.Loading.change(loadingMessage);

    // If the count down is finished, write a message
    if (distance < 1000) {
      clearInterval(timer);
      Notiflix.Loading.remove();
      Notiflix.Notify.failure('Timer has expired');
    }
  }, 1000);
});

// Для подсчета значений используй готовую функцию convertMs, где ms - разница между конечной и текущей датой в миллисекундах.

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
