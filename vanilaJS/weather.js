const weatherSpan = document.querySelector('.js-weather');

const API_KEY = "18c31a9100d6791e4468cdf30116cb3e";
const COORDS = 'coords';

function getWeather(lat, lng) {
    // const weather = fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lng}&appid=${API_KEY}`)
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=37.0079695&lon=127.2796786&appid=${API_KEY}`)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        const temperature = json.main.temp;
        const place = json.name;
        console.log(json);
        weatherSpan.innerText = `${temperature} @ ${place}`
    });

}
function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}
function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}
function handleGeoError() {
    console.error("Can't access geo location");
}
function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}
function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords == null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();