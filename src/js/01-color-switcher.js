function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

const backgroundColorValue = document.body.style.backgroundColor;

const changeBackgroundColor = () => {
  let randomHexColor = getRandomHexColor();
  document.body.style.backgroundColor = randomHexColor;
  backgroundColorValue.innerHTML = randomHexColor;
};

let timerId = null;

startButton.addEventListener('click', () => {
  timerId = setInterval(() => {
    changeBackgroundColor();
  }, 1000);
  startButton.disabled = true;
  stopButton.disabled = false;
});

stopButton.addEventListener('click', () => {
  clearInterval(timerId);
  startButton.disabled = false;
  stopButton.disabled = true;
});
