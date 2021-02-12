const clockContainer = document.querySelector('.js-clock'),
    clockTitle = clockContainer.querySelector('h1');

function getTime() {
    const date = new Date();
    const minutes = formatNumber(date.getMinutes());
    const hours = formatNumber(date.getHours());
    const seconds = formatNumber(date.getSeconds());

    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function formatNumber(number) {
    return number<10?`0${number}`:number;
}
function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();