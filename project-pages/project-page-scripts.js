let currentIndex = 0;

function changeSlide(direction) {
    const images = document.querySelectorAll('.carousel-images img');
    const totalImages = images.length;

    // Update the current index based on direction
    currentIndex += direction;

    // Loop back to the start/end if the index goes out of range
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }

    // Update the carousel position
    const carousel = document.querySelector('.carousel-images');
    carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
}
