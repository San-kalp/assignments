function counter(count) {
    console.log(count);
    count++;

    setTimeout(function () {
        counter(count);
    }, 1000);
}

// Start the counter with an initial count of 0
counter(0);
