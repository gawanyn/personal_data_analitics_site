let slideIndex = 1;
let slideInterval; // Змінна для інтервалу

// Показує перший слайд і запускає інтервал
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
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    // Ховає всі слайди
    Array.from(slides).forEach(slide => slide.style.display = "none");

    // Видаляє клас "active" з усіх точок
    Array.from(dots).forEach(dot => dot.classList.remove("active"));

    // Показує поточний слайд і активує відповідну точку
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

// Функція для запуску інтервалу
function startSlideInterval() {
    slideInterval = setInterval(() => plusSlides(1), 3000); // Змінює слайд кожні 3 секунди
}

// Функція для зупинки і перезапуску інтервалу
function resetSlideInterval() {
    clearInterval(slideInterval); // Зупиняє поточний інтервал
    startSlideInterval(); // Запускає новий інтервал
}
