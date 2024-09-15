let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const indicators = document.querySelector('.carousel-indicators');

// Create indicators
slides.forEach((_, index) => {
    const indicator = document.createElement('div');
    if (index === 0) indicator.classList.add('active');
    indicator.addEventListener('click', () => jumpToSlide(index));
    indicators.appendChild(indicator);
});

// Change slide function
function changeSlide(direction) {
    currentIndex += direction;

    if (currentIndex >= slides.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }

    updateCarousel();
}

// Jump to specific slide
function jumpToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

// Update carousel to show the correct slide
function updateCarousel() {
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(${-currentIndex * 100}%)`;

    // Update active class on indicators
    document.querySelectorAll('.carousel-indicators div').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// Auto-slide functionality (optional)
let autoSlide = setInterval(() => changeSlide(1), 5000);

// Pause auto-slide on interaction
document.querySelector('.carousel').addEventListener('mouseover', () => clearInterval(autoSlide));
document.querySelector('.carousel').addEventListener('mouseout', () => {
    autoSlide = setInterval(() => changeSlide(1), 5000);
});
