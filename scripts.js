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

document.addEventListener("DOMContentLoaded", function() {
    const projectFlowers = document.querySelectorAll('.project-flower');
    
    function checkVisibility() {
        projectFlowers.forEach(flower => {
            const flowerPosition = flower.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (flowerPosition < windowHeight - 100) {
                flower.style.marginTop = '0';
                flower.style.opacity = '1';
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);

    // Check visibility on load
    checkVisibility();
});
