function countUp(counter) {
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
}

document.querySelectorAll(".counter-box").forEach(box => {
    box.addEventListener("mouseover", function() {
        let counter = this.querySelector(".counter");
        counter.innerText = "0"; // Reset the counter before animating
        countUp(counter);
    });
});

countUp(); // Run the counter function for all numbers

function toggleDiv() {
    let div = document.getElementById("popupDiv");
    div.classList.toggle("hidden");
  }