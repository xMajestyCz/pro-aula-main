$(".menu > ul > li").click(function (e) {
  $(this).siblings().removeClass("active");
  $(this).toggleClass("active");
  $(this).find("ul").slideToggle();//
  $(this).siblings().find("ul").slideUp();//
  $(this).siblings().find("ul").find("li").removeClass("active");
});

$("#btn-abrir").click(function () {
  $(".sidebar").toggleClass("active");
  const elementos = document.getElementsByClassName("sect");
  for (const elemento of elementos) {
    elemento.style.marginLeft = "300px"; // Establece el margen izquierdo a 10px
  }
  document.getElementById('btn-abrir').style.display = 'none';
  document.getElementById('btn-cerrar').style.display = 'block';
});

$("#btn-cerrar").click(function () {
  $(".sidebar").toggleClass("active");
  const elementos = document.getElementsByClassName("sect");
  for (const elemento of elementos) {
    elemento.style.marginLeft = "200px"; // Establece el margen izquierdo a 10px
  }
  document.getElementById('btn-abrir').style.display = 'block';
  document.getElementById('btn-cerrar').style.display = 'none';
});


/*const digDoc = document.getElementById("documentoD");
const digRec = document.getElementById("documentoR");

digDoc.addEventListener("input", () => {
  if (digDoc.value.length > 10) {
    digDoc.value = digDoc.value.slice(0, 10);
  }
});
digRec.addEventListener("input", () => {
  if (digRec.value.length > 10) {
    digRec.value = digRec.value.slice(0, 10);
  }
});*/

const inputFile1 = document.getElementById('input-file-1');
const uploadedImage1 = document.getElementById('uploaded-image-1');

const inputFile2 = document.getElementById('input-file-2');
const uploadedImage2 = document.getElementById('uploaded-image-2');

const inputFileN = document.getElementById('input-file-n');
const uploadedImageN = document.getElementById('uploaded-image-n');



const handleFileChange = (event, imageElement) => {
  const chosenImage = event.target.files[0];
  if (chosenImage) {
    if (!chosenImage.type.match('image.*')) {
      alert('Por favor, selecciona un archivo de imagen (jpeg, png o jpg)');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      imageElement.src = event.target.result;
      imageElement.style.display = 'block';
    };
    reader.readAsDataURL(chosenImage);
  }
};

inputFile1.addEventListener('change', (event) => handleFileChange(event, uploadedImage1));
inputFile2.addEventListener('change', (event) => handleFileChange(event, uploadedImage2));
inputFileN.addEventListener('change', (event) => handleFileChange(event, uploadedImageN));

// Add click event listeners to the labels for a better user experience
const uploadLabel1 = document.querySelector('.up-file-1');
uploadLabel1.addEventListener('click', () => {
  inputFile1.click();
});

const uploadLabel2 = document.querySelector('.up-file-2');
uploadLabel2.addEventListener('click', () => {
  inputFile2.click();
});

const uploadLabelN = document.querySelector('.up-file-n');
uploadLabelN.addEventListener('click', () => {
  inputFileN.click();
});

const sectionButtonD = document.getElementById('btn-section-add-doctor');
const sectionButtonMD = document.getElementById('btn-section-mod-doctor');
const sectionButtonMD2 = document.getElementById('btn-sub-section-mod-doctor');
const sectionButtonR = document.getElementById('btn-section-add-recep');
const sectionButtonMR = document.getElementById('btn-section-mod-recep');
const sectionButtonMR2 = document.getElementById('btn-sub-section-mod-recep');
const sectionButtonN = document.getElementById('btn-section-news');
const sectionButtonND = document.getElementById('btn-section-news-delete');
const sectionD = document.querySelector('.section-doctor');
const sectionMD = document.querySelector('.section-mod-doctor');
const sectionMD2 = document.querySelector('.sub-section-mod-doctor');
const sectionR = document.querySelector('.section-recep');
const sectionMR = document.querySelector('.section-mod-recep');
const sectionMR2 = document.querySelector('.sub-section-mod-recep');
const sectionN = document.querySelector('.section-news');
const sectionND = document.querySelector('.section-news-delete');

[sectionButtonD, sectionButtonMD, sectionButtonMD2, sectionButtonR, sectionButtonMR, sectionButtonMR2, sectionButtonN, sectionButtonND].forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    if (button === sectionButtonD) {
      sectionD.classList.add('visible');
    } else {
      sectionD.classList.remove('visible');
    }
    if (button === sectionButtonMD) {
      sectionMD.classList.add('visible');
    } else {
      sectionMD.classList.remove('visible');
    }
    if (button === sectionButtonMD2) {
      sectionMD2.classList.add('visible');
    } else {
      sectionMD2.classList.remove('visible');
    }
    if (button === sectionButtonR) {
      sectionR.classList.add('visible');
    } else {
      sectionR.classList.remove('visible');
    }
    if (button === sectionButtonMR) {
      sectionMR.classList.add('visible');
    } else {
      sectionMR.classList.remove('visible');
    }
    if (button === sectionButtonMR2) {
      sectionMR2.classList.add('visible');
    } else {
      sectionMR2.classList.remove('visible');
    }
    if (button === sectionButtonN) {
      sectionN.classList.add('visible');
    } else {
      sectionN.classList.remove('visible');
    }
    if (button === sectionButtonND) {
      sectionND.classList.add('visible');
    } else {
      sectionND.classList.remove('visible');
    }
  });
});


function setupSearch(inputSelector, tableRows) {
  const searchInput = document.querySelector(inputSelector);

  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    tableRows.forEach(row => {
      const rowData = row.textContent.toLowerCase();
      const isMatch = rowData.includes(searchTerm);
      row.classList.toggle('hide', !isMatch);
    });

    document.querySelectorAll('tbody tr:not(.hide)').forEach((visibleRow, i) => {
      visibleRow.style.backgroundColor = (i % 2 === 0) ? 'transparent' : '#0000000b';
    });
  });
}

const tableRowsD = document.querySelectorAll('tbody tr');
setupSearch('.input-group-doctor input', tableRowsD);

const tableRowsR = document.querySelectorAll('tbody tr');
setupSearch('.input-group-recep input', tableRowsR);


let uploadedImageSrc = '';

document.getElementById('up-new').addEventListener('click', function() {
  // Obtener el valor del campo de entrada
  var title = document.getElementById('title').value;
  // Obtener el texto del textarea
  var newContent = document.getElementById('new').value;
  var link = document.getElementById('link').value;
  var imgSrc = document.getElementById('uploaded-image-n').src;

  // Obtener los elementos de jSwiper ya creados (si los hay)
  var swiperSlides = JSON.parse(localStorage.getItem('swiperSlides')) || [];

  // Agregar el nuevo elemento a la lista de elementos de jSwiper
  swiperSlides.push({
      title: title,
      content: newContent,
      link: link,
      imgSrc: imgSrc
  });

  // Guardar los elementos de jSwiper en localStorage
  localStorage.setItem('swiperSlides', JSON.stringify(swiperSlides));

  //limpiar campos
  document.getElementById('uploaded-image-n').src = '';
});

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
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
  },
});

document.addEventListener('DOMContentLoaded', function() {
  var swiperSlides = JSON.parse(localStorage.getItem('swiperSlides')) || [];
  var swiperWrapper = document.querySelector('.swiper-wrapper');

  // Función para agregar una noticia a la interfaz
  function addSlideToSwiper(slide, index) {
      var swiperSlideHTML = `
          <div class="card swiper-slide" data-index="${index}">
              <div class="image-content">
                  <span class="overlay-img"></span>
                  <div class="card-image">
                      <img src="${slide.imgSrc}" alt="" class="card-img">
                  </div>
              </div>
              <div class="card-content">
                  <h2 class="name">${slide.title}</h2>
                  <p class="description">${slide.content}</p>
                  <button class="button delete-button" data-index="${index}">Eliminar</button>
              </div>
          </div>
      `;
      swiperWrapper.innerHTML += swiperSlideHTML;
  }

  // Insertar los elementos de jSwiper en la página
  swiperSlides.forEach(function(slide, index) {
      addSlideToSwiper(slide, index);
  });

  // Evento para manejar la eliminación de una noticia
  document.querySelector('.swiper-wrapper').addEventListener('click', function(event) {
      if (event.target.classList.contains('delete-button')) {
          var index = event.target.getAttribute('data-index');
          deleteSlide(index);
      }
  });

  // Función para eliminar una noticia
  function deleteSlide(index) {
      var swiperSlides = JSON.parse(localStorage.getItem('swiperSlides')) || [];
      swiperSlides.splice(index, 1);
      localStorage.setItem('swiperSlides', JSON.stringify(swiperSlides));
      document.querySelector(`.swiper-slide[data-index="${index}"]`).remove();

      // Actualizar Swiper
      swiper.update();
  }
});
