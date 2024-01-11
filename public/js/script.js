
function updateTime() {
    const today = new Date();
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();
    const time = new Date().getTime();

    // Figure out the year that the next Christmas will occur on
    let nextChristmasYear = today.getFullYear();
    if (currentMonth === 12 && currentDay > 25) {
        nextChristmasYear += 1;
    }
    const christmasDay = new Date(`dec 25, ${nextChristmasYear} 00:00:00`).getTime();
    let t = christmasDay - time;
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);

    document.getElementById('days-value').innerHTML = days;
    document.getElementById('hours-value').innerHTML = hours;
    document.getElementById('minutes-value').innerHTML = minutes;
    document.getElementById('seconds-value').innerHTML = seconds;


    if (days == 0) {
        clearInterval(x);
        document.getElementById("message")
            .innerHTML = "🎄 HAPPY CHRISTMAS🎄";
        document.getElementById('days-value').style.display = "none";
        document.getElementById('hours-value').style.display = "none";
        document.getElementById('minutes-value').style.display = "none";
        document.getElementById('seconds-value').style.display = "none";
        document.getElementById("time-container").style.display = "none";
    }
}
if (document.getElementById('days-value')) {
    setInterval(updateTime, 1000);

    updateTime();
}
else {
    console.log("Could not find the element to update time.")
}

function revealAnswer() {
    var answer = document.getElementById('answer');
    answer.classList.remove('answer-container');
    answer.classList.add('reveal');
}

