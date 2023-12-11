
function updateTime() {
    const today = new Date().getTime();
    const christmasDay = new Date("dec 25, 2023 00:00:00").getTime();
    let t = christmasDay - today;
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);

    document.getElementById('days-value').innerHTML = days;
    document.getElementById('hours-value').innerHTML = hours;
    document.getElementById('minutes-value').innerHTML = minutes;
    document.getElementById('seconds-value').innerHTML = seconds;

    if (t < 0) {
        clearInterval(x);
        document.getElementById("message")
            .innerHTML = "🎄 SEE YOU IN 2024🎄";
        document.getElementById('days-value').style.display = "none";
        document.getElementById('hours-value').style.display = "none";
        document.getElementById('minutes-value').style.display = "none";
        document.getElementById('seconds-value').style.display = "none";
        document.getElementById("time-container").style.display = "none";
    }
}

setInterval(updateTime, 1000);

updateTime();

