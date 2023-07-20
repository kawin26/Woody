document.addEventListener("DOMContentLoaded", function() {
    // Function to set or get the target date from localStorage
    function getTargetDate() {
        const storedTargetDate = localStorage.getItem("targetDate");
        if (storedTargetDate) {
            return new Date(storedTargetDate);
        } else {
            const targetDate = new Date();
            targetDate.setDate(targetDate.getDate() + 50);
            localStorage.setItem("targetDate", targetDate);
            return targetDate;
        }
    }

    // Function to update the countdown timer
    function updateCountdown() {
        const targetDate = getTargetDate();
        const currentDate = new Date();
        const timeDifference = targetDate - currentDate;

        if (timeDifference > 0) {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            document.getElementById("days").innerText = days;
            document.getElementById("hours").innerText = hours;
            document.getElementById("minutes").innerText = minutes;
            document.getElementById("seconds").innerText = seconds;
        } else {
            document.getElementById("timer").innerText = "The wait is over!";
        }
    }

    // Update the countdown every second
    setInterval(updateCountdown, 1000);

    // Initial update
    updateCountdown();

    // Inline styles for the countdown timer
    const timer = document.getElementById("timer");
    timer.style.textAlign = "center";

    const timerBoxes = document.querySelectorAll(".timer-box");
    timerBoxes.forEach(box => {
        box.style.backgroundColor = "#ffffff";
        box.style.border = "2px solid #cccccc";
        box.style.padding = "10px";
        box.style.borderRadius = "5px";
        box.style.width = "100px";
        box.style.display = "flex";
        box.style.flexDirection = "column";
        box.style.alignItems = "center";
    });

    const timerValues = document.querySelectorAll(".timer-value");
    timerValues.forEach(value => {
        value.style.fontSize = "24px";
        value.style.fontWeight = "bold";
    });

    const timerLabels = document.querySelectorAll(".timer-label");
    timerLabels.forEach(label => {
        label.style.fontSize = "16px";
    });
});

