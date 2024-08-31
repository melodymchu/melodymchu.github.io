// Run the code only after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript is running'); // Log message to confirm script is working

    // Select the "Back to Top" button
    const backToTopButton = document.getElementById("backToTop");

    // Check if "Back to Top" button exists before adding event listener
    if (backToTopButton) {
        backToTopButton.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default anchor click behavior
            window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
        });
    }
// script.js
// script.js

document.addEventListener("DOMContentLoaded", function () {
    const flowers = document.querySelectorAll('.flower');
    const featuredSection = document.getElementById('featured-projects');

    window.addEventListener('scroll', function () {
        const sectionTop = featuredSection.offsetTop;
        const sectionHeight = featuredSection.offsetHeight;
        const scrollPos = window.scrollY + window.innerHeight;

        // Check if the user has scrolled to the Featured Projects section
        if (scrollPos > sectionTop + sectionHeight / 4) {
            flowers.forEach((flower, index) => {
                setTimeout(() => {
                    flower.classList.add('active');
                }, index * 200); // Stagger animation for each flower
            });
        }
    });
});


    // Run checkVisibility function on page scroll
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check to see if any flowers are already in view

    // Function to filter projects based on selected category
    function filterProjects(category) {
        const projects = document.querySelectorAll('.project-item'); // Select all project items

        projects.forEach(project => {
            if (category === 'all') {
                project.style.display = 'block'; // Show all projects if 'all' is selected
            } else {
                // Show or hide projects based on category match
                if (project.classList.contains(category)) {
                    project.style.display = 'block'; // Show matching projects
                } else {
                    project.style.display = 'none'; // Hide non-matching projects
                }
            }
        });
    }

    // Show or hide the "Back to Top" button based on scroll position
    window.onscroll = function() {
        scrollFunction(); // Call scrollFunction whenever user scrolls
    };

    // Function to show or hide "Back to Top" button
    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            // Show button if user scrolls down more than 100px
            if (backToTopButton) {
                backToTopButton.style.display = "block";
            }
        } else {
            // Hide button if user scrolls up to less than 100px
            if (backToTopButton) {
                backToTopButton.style.display = "none";
            }
        }
        checkVisibility(); // Re-check visibility of flowers when scrolling
    }
});
