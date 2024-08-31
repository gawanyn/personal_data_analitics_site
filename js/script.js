let slideIndex = 1;
let slideInterval; // Змінна для інтервалу
showSlides(slideIndex);
startSlideInterval();

function plusSlides(n) {
  showSlides(slideIndex += n);
  resetSlideInterval(); // Перезапускає таймер
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  resetSlideInterval(); // Перезапускає таймер
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Функція для запуску інтервалу
function startSlideInterval() {
  slideInterval = setInterval(function() {
    plusSlides(1);
  }, 3000); // Змінює слайд кожні 3 секунди
}

// Функція для зупинки і перезапуску інтервалу
function resetSlideInterval() {
  clearInterval(slideInterval); // Зупиняє поточний інтервал
  startSlideInterval(); // Запускає новий інтервал
}
