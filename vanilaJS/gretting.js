const form = document.querySelector(".js-form"),
    input = document.querySelector("input"),
    greeting = document.querySelector(".js-greetings");
const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function init() {
    form.addEventListener('submit', handleSubmit);
    loadName();
}

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    saveName(currentValue);
    paintGreeting(currentValue);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function askForName() {
    form.classList.add(SHOWING_CN);
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser == null) {
        askForName();
    } else{
        paintGreeting(currentUser);
    }
}

init();