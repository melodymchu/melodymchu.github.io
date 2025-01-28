document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".carousel"); // Get all carousels

    carousels.forEach((carousel) => {
        let currentIndex = 0; // Track the current slide index
        const slides = carousel.querySelectorAll(".carousel-item"); // Get slides in the current carousel
        const totalSlides = slides.length; // Count of slides in this carousel
        const indicatorsContainer = carousel.querySelector(".carousel-indicators");

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
            const allDots = carousel.querySelectorAll(".carousel-dot");
            allDots.forEach((dot, index) => {
                dot.classList.toggle("active", index === currentIndex);
            });
            // Apply a transform to slide the .carousel-inner container
            const carouselInner = carousel.querySelector(".carousel-inner");
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
        carousel.querySelector(".prev").addEventListener("click", () => changeSlide(-1));
        carousel.querySelector(".next").addEventListener("click", () => changeSlide(1));
        carousel.querySelector(".fullscreen-btn").addEventListener("click", toggleFullscreen);

        // Initialize the carousel on page load
        initializeCarousel();
        updateActiveSlide();
    });
});



function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
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
    captionText.innerHTML = dots[slideIndex-1].alt;
  }