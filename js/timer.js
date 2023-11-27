const countdownTime = 30 * 60;

function startCountdown() {
    let seconds = countdownTime;

    const minutesElement = $(".minutes");
    const secondsElement = $(".seconds");

    function updateTimer() {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        minutesElement[0].textContent = String(minutes).slice(0, 1);
        minutesElement[1].textContent = String(minutes).slice(1);
        secondsElement[0].textContent = String(remainingSeconds).slice(0, 1);
        secondsElement[1].textContent = String(remainingSeconds).slice(1);

        seconds--;

        if (seconds < 0) {
            clearInterval(interval);
            minutesElement[0].textContent = "0";
            minutesElement[1].textContent = "0";
            secondsElement[0].textContent = "0";
            secondsElement[1].textContent = "0";
        }
    }

    updateTimer();

    const interval = setInterval(updateTimer, 1000);
}

document.addEventListener("DOMContentLoaded", startCountdown);
