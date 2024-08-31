// Function to filter projects based on category
function filterProjects(category) {
    const projects = document.querySelectorAll('.project-item'); // Select all project items

    projects.forEach(project => {
        if (category === 'all') {
            project.style.display = 'block'; // Show all projects
        } else {
            if (project.classList.contains(category)) {
                project.style.display = 'block'; // Show projects that match the category
            } else {
                project.style.display = 'none'; // Hide projects that don't match
            }
        }
    });
}

// Show the "Back to Top" button when user scrolls down 100px
window.onscroll = function() {
    scrollFunction(); // Call scrollFunction on scroll event
};

function scrollFunction() {
    const backToTopButton = document.getElementById("backToTop"); // Get the Back to Top button
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block"; // Show the button
    } else {
        backToTopButton.style.display = "none"; // Hide the button
    }
}

// Smooth scrolling behavior when "Back to Top" button is clicked
document.getElementById("backToTop").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
});

// When the document is fully loaded, add scroll event listener to animate project flowers
document.addEventListener("DOMContentLoaded", function() {
    const projectFlowers = document.querySelectorAll('.project-flower'); // Select all project flowers
    window.addEventListener('scroll', function() {
        projectFlowers.forEach(flower => {
            const flowerPosition = flower.getBoundingClientRect().top; // Get position of the flower
            const windowHeight = window.innerHeight; // Get window height
            if (flowerPosition < windowHeight - 100) {
                flower.style.marginTop = '0'; // Move flower up to its original position
                flower.style.opacity = '1'; // Make flower fully visible
            }
        });
    });
});
