document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript is running');
    
    const flowers = document.querySelectorAll('.flower');

    function checkVisibility() {
        flowers.forEach(flower => {
            const rect = flower.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                flower.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check
});
