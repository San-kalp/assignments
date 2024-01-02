function formatTime24() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
}

function formatTime12() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;

    return `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
}

let intervalId;

function updateClock() {
    const time24 = formatTime24();
    const time12 = formatTime12();

    console.log("Time in 24-hour format:", time24);
    console.log("Time in 12-hour format:", time12);
}

// Set interval to update the clock every second
intervalId = setInterval(updateClock, 1000);

// Stop the interval after 10 seconds
setTimeout(function() {
    clearInterval(intervalId);
    console.log("Interval stopped after 10 seconds.");
}, 10000);
