const hour = document.querySelector(".hr");
const minute = document.querySelector(".min");
const second = document.querySelector(".sec");
const deg = 6;

setInterval(() => {
    let today = new Date();
    let hr = today.getHours() * 30;
    let min = today.getMinutes() * deg;
    let sec = today.getSeconds() * deg;
    hour.style.transform = `rotateZ(${hr + (min / 12)}deg)`;
    minute.style.transform = `rotateZ(${min}deg)`;
    second.style.transform = `rotateZ(${sec}deg)`;
}, 1000);