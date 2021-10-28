const clockElem = document.querySelector('.clock');

function timeing() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let am_pm = hours > 12 ? 'PM' : 'AM';
    hours = hours > 12 ? hours - 12 : hours;
    hours = hours < 10 ? `0${hours}` : `${hours}`;
    minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    clockElem.innerText = `${hours} : ${minutes} : ${seconds} ${am_pm}`;
}

setInterval(() => {
    timeing();
}, 1000);