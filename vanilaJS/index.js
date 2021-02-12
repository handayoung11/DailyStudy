const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}
function init() {
  title.addEventListener('click', handleClick);
}
init();

function handleOffline() {
  console.log('Bye bye!');
}
function handleOnline() {
  console.log('Welcome back');
}
window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);