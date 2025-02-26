// function countUp(target, duration) {
//     let counter = document.getElementById("counter");
//     let start = 0;
//     let increment = target / (duration / 10); // Controls speed
//     let interval = setInterval(() => {
//         start += increment;
//         if (start >= target) {
//             counter.innerText = target; // Ensure exact target number
//             clearInterval(interval);
//         } else {
//             counter.innerText = Math.floor(start);
//         }
//     }, 10);
// }

// countUp(100, 2000); // Count to 500 in 2 seconds


function countUpAll() {
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        let target = parseInt(counter.getAttribute("data-target"));
        let start = 0;
        let duration = 2000; // 2 seconds
        let increment = target / (duration / 10);

        let interval = setInterval(() => {
            start += increment;
            if (start >= target) {
                counter.innerText = target; // Ensure exact final number
                clearInterval(interval);
            } else {
                counter.innerText = Math.floor(start);
            }
        }, 10);
    });
}

countUpAll(); // Run the counter function for all numbers