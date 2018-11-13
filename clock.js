// const clockContainer = document.querySelector(".js-clock");
// const clockTitle = clockContainer.querySelector("h1");
const clockTitle = document.querySelector(".js-clock");

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours <10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}` : minutes}`; // mini-if
    // clockTitle.innerText = `${hours <10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds <10 ? `0${seconds}` : seconds}`; // mini-if
}
function init() {
    getTime();
    setInterval(getTime, 1000); // every 1,000 ms, execute the function.
}

init();