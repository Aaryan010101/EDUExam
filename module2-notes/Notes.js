// Sidebar JS is now managed securely inside Navbar component




// Animation footer slider
const footer = document.querySelector(".footer-animate");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            footer.classList.add("show");
        } else {
            footer.classList.remove("show"); 
        }
    });
}, {
    threshold: 0.2  // 20% footer visible hote hi animation start
});

observer.observe(footer);