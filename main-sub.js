const counterElement = document.querySelector(".counter");
const counterSection = counterElement ? counterElement.closest("section") : null;
const counters = document.querySelectorAll(".counter");

function runCounters() {
    counters.forEach(counter => {
    counter.innerText = "0";
    let target = +counter.getAttribute("data-target");
    let count = 0;

    function updateCounter() {
        let increment = target / 80;

        if (count < target) {
        count += increment;
        counter.innerText = Math.floor(count);
        requestAnimationFrame(updateCounter);
        } else {
        counter.innerText = target;
        }
    }

    updateCounter();
});
}

if (counterSection) {
    const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          runCounters(); // 🔥 every time section enters viewport
        }
    });
    }, { threshold: 0.4 });

    counterObserver.observe(counterSection);
}


// Subject cards


const subjectCards = document.querySelectorAll(".subject-card");

const subjectObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
    entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show"); // 🔥 reset animation
    }
    });
}, { threshold: 0.25 });

subjectCards.forEach(card => subjectObserver.observe(card));







// AI Section



const message =
"Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. It divides tables into smaller related tables and improves efficiency.";

const speed = 35;
let index = 0;

const typing = document.getElementById("typing");
const aiMsg = document.getElementById("aiMsg");
const text = document.getElementById("text");

setTimeout(() => {
  if (typing && aiMsg && text) {
      typing.style.display = "none";
      aiMsg.classList.remove("hidden");
    
      function typeEffect(){
        if(index < message.length){
          text.innerHTML += message.charAt(index);
          index++;
          setTimeout(typeEffect, speed);
        }
      }
      typeEffect();
  }
}, 2000);