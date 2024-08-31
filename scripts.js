function filterProjects(category) {
    const projects = document.querySelectorAll('.project-item');

    projects.forEach(project => {
        if (category === 'all') {
            project.style.display = 'block';
        } else {
            if (project.classList.contains(category)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        }
    });
}

// Show the "Back to Top" button when the user scrolls down 100px from the top
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

// Smooth scrolling behavior
document.getElementById("backToTop").addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});



document.addEventListener("DOMContentLoaded", function() {
    const projectFlowers = document.querySelectorAll('.project-flower');
    window.addEventListener('scroll', function() {
        projectFlowers.forEach(flower => {
            const flowerPosition = flower.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (flowerPosition < windowHeight - 100) {
                flower.style.marginTop = '0';
                flower.style.opacity = '1';
            }
        });
    });
});
