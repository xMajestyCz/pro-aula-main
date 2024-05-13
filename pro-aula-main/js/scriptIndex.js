var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 2,
        }, 
        1000: {
            slidesPerView: 3,
        }, 
        1500: {
            slidesPerView: 4,
        }, 
    },
});

const digAfi = document.getElementById("documentoA");

digAfi.addEventListener("input", () => {
    if (digAfi.value.length > 10) {
        digAfi.value = digAfi.value.slice(0, 10);
    }
});

