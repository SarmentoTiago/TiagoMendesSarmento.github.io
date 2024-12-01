

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelector('.slides');
  const dots = document.querySelectorAll('.dot');
  let slideIndex = 0;

  function showSlide(index) {
    const offset = -index * 100;
    slides.style.transform = `translateX(${offset}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }

  function nextSlide() {
    slideIndex = (slideIndex + 1) % dots.length;
    showSlide(slideIndex);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      slideIndex = index;
      showSlide(slideIndex);
    });
  });

  setInterval(nextSlide, 3000);

  showSlide(slideIndex);
});



document.addEventListener('DOMContentLoaded', (event) => {
  const carouselImages = document.querySelectorAll('.carousel .slides img');
  const customLightbox = document.getElementById('customLightbox');
  const customLightboxImg = document.getElementById('customLightboxImg');
  const customCloseBtn = document.querySelector('.customClose');
  const customCaptionText = document.getElementById('customCaption');
  const customLightboxThumbnails = document.querySelectorAll('.customLightbox-thumbnail');
  const customPrevBtn = document.getElementById('customPrev');
  const customNextBtn = document.getElementById('customNext');
  let currentIndex = 0;

  carouselImages.forEach((img, index) => {
    img.addEventListener('click', () => {
      customLightbox.style.display = 'block';
      customLightboxImg.src = img.src;
      customLightboxImg.alt = '';
      customCaptionText.innerHTML = img.getAttribute('aria-label');
      currentIndex = index;
      updateSelectedThumbnail(index);
    });
  });

  customLightboxThumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      customLightboxImg.src = thumbnail.src;
      customLightboxImg.alt = '';
      customCaptionText.innerHTML = thumbnail.getAttribute('aria-label');
      currentIndex = index;
      updateSelectedThumbnail(index);
    });
  });

  customCloseBtn.addEventListener('click', () => {
    customLightbox.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === customLightbox) {
      customLightbox.style.display = 'none';
    }
  });

  customPrevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? carouselImages.length - 1 : currentIndex - 1;
    updateLightboxImage();
  });

  customNextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === carouselImages.length - 1) ? 0 : currentIndex + 1;
    updateLightboxImage();
  });

  function updateSelectedThumbnail(index) {
    customLightboxThumbnails.forEach((thumbnail, i) => {
      thumbnail.classList.toggle('selected', i === index);
    });
  }

  function updateLightboxImage() {
    const img = carouselImages[currentIndex];
    customLightboxImg.src = img.src;
    customLightboxImg.alt = '';
    customCaptionText.innerHTML = img.getAttribute('aria-label');
    updateSelectedThumbnail(currentIndex);
  }
});
