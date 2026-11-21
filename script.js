function updateCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('current-time').textContent = timeString;
}

// Update the current time every second
setInterval(updateCurrentTime, 1000);

// Initial call to display the time immediately
updateCurrentTime();