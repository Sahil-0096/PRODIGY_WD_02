let timer;
let startTime;
let running = false;
let lapCount = 1;

const display = document.querySelector('.display');
const lapTimes = document.querySelector('.lap-times');

function formatTime(ms) {
    const date = new Date(ms);
    return date.toISOString().substr(11, 8);
}

function updateTime() {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;
    display.textContent = formatTime(elapsedTime);
}

function startTimer() {
    if (!running) {
        startTime = new Date().getTime();
        timer = setInterval(updateTime, 10);
        running = true;
    }
}

function pauseTimer() {
    clearInterval(timer);
    running = false;
}

function resetTimer() {
    clearInterval(timer);
    running = false;
    display.textContent = '00:00:00';
    lapTimes.innerHTML = '';
    lapCount = 1;
}

function lap() {
    const lapTime = formatTime(new Date().getTime() - startTime);
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
    lapTimes.prepend(lapItem);
    lapCount++;
}

document.querySelector('.start').addEventListener('click', startTimer);
document.querySelector('.pause').addEventListener('click', pauseTimer);
document.querySelector('.reset').addEventListener('click', resetTimer);
document.querySelector('.lap').addEventListener('click', lap);

