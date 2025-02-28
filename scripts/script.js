const text = "Nortey-King"; // The text to type
const typingElement = document.getElementById("typing");

let index = 0;
let typingSpeed = 150; // Speed of typing
let delayBeforeRestart = 2000; // Pause before restarting

function typeEffect() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, typingSpeed); // Continue typing
    } else {
        setTimeout(resetTyping, delayBeforeRestart); // Wait before restarting
    }
}

function resetTyping() {
    typingElement.innerHTML = ""; // Clear the text
    index = 0; // Reset the index
    typeEffect(); // Restart typing effect
}

typeEffect(); // Start the typing effect



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


//   Tabing Content onclick
document.querySelectorAll('.tab-link').forEach(button => {
    button.addEventListener('click', () => {
        let target = button.getAttribute('data-tab');

        // Hide all content divs
        document.querySelectorAll('.tab-content').forEach(div => div.classList.add('hidden'));

        // Show the selected content
        document.getElementById('content-' + target).classList.remove('hidden');
    });
});