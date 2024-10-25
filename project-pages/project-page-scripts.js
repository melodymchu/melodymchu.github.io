document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0; // Track the current slide index
    const slides = document.querySelectorAll(".carousel-item"); // Get all slides
    const totalSlides = slides.length; // Count of total slides
    const indicatorsContainer = document.querySelector(".carousel-indicators");
    
    // Initialize the carousel and create indicators
    function initializeCarousel() {
        // Create indicators dynamically based on number of slides
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement("div");
            dot.classList.add("carousel-dot");
            if (i === currentIndex) dot.classList.add("active");
            dot.addEventListener("click", () => goToSlide(i)); // Jump to the clicked slide
            indicatorsContainer.appendChild(dot);
        }
    }

    // Update active slide and indicators
    function updateActiveSlide() {
        // Loop through slides and set the active class based on currentIndex
        slides.forEach((slide, index) => {
            slide.classList.toggle("active", index === currentIndex);
        });
        // Update the active indicator dot
        const allDots = document.querySelectorAll(".carousel-dot");
        allDots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
        // Apply a transform to slide the .carousel-inner container
        const carouselInner = document.querySelector(".carousel-inner");
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Change slide function (next or previous)
    function changeSlide(direction) {
        currentIndex += direction;
        // Loop back to the start or end if going out of bounds
        if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        } else if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }
        updateActiveSlide();
    }

    // Go to a specific slide based on index
    function goToSlide(index) {
        currentIndex = index;
        updateActiveSlide();
    }

    // Toggle fullscreen mode
    function toggleFullscreen() {
        const carousel = document.querySelector(".carousel");
        if (!document.fullscreenElement) {
            if (carousel.requestFullscreen) {
                carousel.requestFullscreen();
            } else if (carousel.mozRequestFullScreen) { // Firefox
                carousel.mozRequestFullScreen();
            } else if (carousel.webkitRequestFullscreen) { // Chrome, Safari and Opera
                carousel.webkitRequestFullscreen();
            } else if (carousel.msRequestFullscreen) { // IE/Edge
                carousel.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }

    // Event Listeners for navigation controls
    document.querySelector(".prev").addEventListener("click", () => changeSlide(-1));
    document.querySelector(".next").addEventListener("click", () => changeSlide(1));
    document.querySelector(".fullscreen-btn").addEventListener("click", toggleFullscreen);

    // Initialize the carousel on page load
    initializeCarousel();
    updateActiveSlide();
});
/*

let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const indicators = document.querySelector('.carousel-indicators');
const carousel = document.getElementById('carousel');

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

// Toggle Fullscreen
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        carousel.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable fullscreen mode: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}
*/