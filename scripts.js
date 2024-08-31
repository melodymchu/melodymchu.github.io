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
                flower.style.animation = 'springUp 1s ease-out'; // Apply animation
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check

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
       
