function labas() {
    console.log('labas rytas');
}

setTimeout(labas, 100);
setTimeout(labas, 200);
setTimeout(labas, 300);

// #################################################

const clockDOM = document.querySelector('.clock');
const timeReset = 86399;
let clockTime = 0;
function updateClock() {
    if (clockTime === timeReset) {
        clockTime = -1;
    }
    clockTime++;
    const h = Math.floor(clockTime / 3600);
    const m = Math.floor((clockTime - h * 3600) / 60);
    // const s = clockTime - h * 3600 - m * 60;
    const s = clockTime % 60;
    clockDOM.innerText = `${h}h ${m}m ${s}s`;
}

setInterval(updateClock, 1000);