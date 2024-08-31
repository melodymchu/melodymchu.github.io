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
    const flowers = document.querySelectorAll('.flower');
    flowers.forEach(flower => {
        if (flower) { // Check if flower is not null
            const rect = flower.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                flower.classList.add('visible');
            }
        }
    });
    
    
    window.addEventListener('scroll', scrollFunction);
    scrollFunction(); // Initial check
    
}

// Smooth scrolling behavior when "Back to Top" button is clicked
document.getElementById("backToTop").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript is running');
    const flowers = document.querySelectorAll('.flower');
    console.log(flowers);

    function checkVisibility() {
        flowers.forEach(flower => {
            const rect = flower.getBoundingClientRect();
            console.log(rect.top, window.innerHeight); // Log positions
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                flower.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check
});


