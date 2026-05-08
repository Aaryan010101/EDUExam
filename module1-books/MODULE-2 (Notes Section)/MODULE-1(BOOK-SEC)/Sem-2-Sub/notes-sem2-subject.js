// <!-- SIDEBAR JS -->

const sidebar = document.getElementById("sidebar");
const openBtn = document.getElementById("openSidebar");
const closeBtn = document.getElementById("closeSidebar");

openBtn.addEventListener("click", () => {
    sidebar.classList.remove("-translate-x-full");
    sidebar.classList.add("translate-x-0");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.add("-translate-x-full");
    sidebar.classList.remove("translate-x-0");
});




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