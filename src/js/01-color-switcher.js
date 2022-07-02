// zad dom 9
// 01-color-switcher.js

const startBtn = document.querySelector('[data-start]');

const stopBtn = document.querySelector('[data-stop');
// function to random change color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// click on and startBtn event
startBtn.addEventListener('click', handleEvent);
let timerId = null;
function handleEvent() {
  timerId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
  startBtn.disabled = true;
}
// click on and stopBtn event
stopBtn.addEventListener('click', stopEvent);
function stopEvent() {
  clearInterval(timerId);
  startBtn.disabled = false;
}
