const digAfi = document.getElementById("documentoA");

digAfi.addEventListener("input", () => {
    if (digAfi.value.length > 10) {
        digAfi.value = digAfi.value.slice(0, 10);
    }
});

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


window.onload = function() {
    const imgSrc = localStorage.getItem('uploadedImage');
    if (imgSrc) {
        document.getElementById('displayedImage').src = imgSrc;
    } else {
        alert('No hay imagen cargada.');
    }
};


// Insertar los elementos de jSwiper en la página al cargar
document.addEventListener('DOMContentLoaded', function() {
    var swiperSlides = JSON.parse(localStorage.getItem('swiperSlides')) || [];
    var swiperWrapper = document.querySelector('.swiper-wrapper');
    swiperSlides.forEach(function(slide) {
        var swiperSlideHTML = `
            <div class="card swiper-slide">
                <div class="image-content">
                    <span class="overlay-img"></span>
                    <div class="card-image">
                        <img src="${slide.imgSrc}" alt="" class="card-img">
                    </div>
                </div>
                <div class="card-content">
                    <h2 class="name">${slide.title}</h2>
                    <p class="description">${slide.content}</p>
                    <a href="${slide.link}" target="_blank"><button class="button">Conoce más</button></a>
                </div>
            </div>
        `;
        swiperWrapper.innerHTML += swiperSlideHTML;
    });
});

// Función para actualizar los índices de las noticias
function updateIndices() {
    document.querySelectorAll('.swiper-slide').forEach((slide, newIndex) => {
        slide.setAttribute('data-index', newIndex);
        slide.querySelector('.delete-button').setAttribute('data-index', newIndex);
    });
}