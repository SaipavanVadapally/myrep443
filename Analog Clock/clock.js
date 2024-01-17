const hour = document.getElementById('hour');
const minutes = document.getElementById('minute');
const seconds = document.getElementById('second');

setInterval(function() {
    const currentDate = new Date();
    hour.style.transform = `rotate(${(currentDate.getHours() * 30) + (currentDate.getMinutes() * 0.5)}deg)`;
    minutes.style.transform = `rotate(${(currentDate.getMinutes() * 6) + (currentDate.getSeconds() * 0.1)}deg)`;
    seconds.style.transform = `rotate(${currentDate.getSeconds() * 6}deg)`;
}, 1000);
