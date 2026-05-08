
// =============== SWIPER CSS ===============

let swiperHome = new  Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -10,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',


    autoplay: {
        delay: 1700,
        disableOnInteraction: false,
    },

    breakpoints: {
        1220: {
            spaceBetween: -20,
        }
    }


})







// Sidebar JS is now managed securely inside Navbar component





// Animation footer slider
const footer = document.querySelector(".footer-animate");

if (footer) {
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
}