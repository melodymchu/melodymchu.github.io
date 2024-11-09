document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById("backToTop");

    if (backToTopButton) {
        backToTopButton.addEventListener("click", (event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

        let scrollScheduled = false;
        window.addEventListener('scroll', () => {
            if (!scrollScheduled) {
                scrollScheduled = true;
                requestAnimationFrame(() => {
                    backToTopButton.style.display = window.scrollY > 100 ? "block" : "none";
                    scrollScheduled = false;
                });
            }
        });
    }

    // Event delegation for filter links to avoid directly using `onclick` in HTML
    const filterContainer = document.getElementById('filterContainer');
    if (filterContainer) {
        filterContainer.addEventListener('click', (event) => {
            const target = event.target;
            if (target.classList.contains('filter-link')) {
                const category = target.getAttribute('data-category'); // Assumes `data-category` contains the category
                filterProjects(category, target, event);
            }
        });
    }

    // Attempt to load the "Featured" tab by default on load
    const featuredTab = document.querySelector('#filterContainer .filter-link[data-category="featured"]');
    if (featuredTab) {
        setTimeout(() => filterProjects('featured', featuredTab, null), 0); // Delay slightly to ensure flowerRow is available
    } else {
        console.warn("featuredTab not found in DOM");
    }

    const flowerRow = document.getElementById('flowerRow');
    if (flowerRow) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log("flowerRow is in view");
                    loadFlowers();
                    observer.disconnect(); // Ensure `loadFlowers` only runs once
                }
            });
        }, { rootMargin: "100px" });

        setTimeout(() => observer.observe(flowerRow), 100); // Delay observer to ensure flowerRow is ready in DOM
    } else {
        console.warn("flowerRow element not found in DOM at load time");
    }
});

// Updated filterProjects function to include a fallback if flowerRow is not found
function filterProjects(category, element, event) { 
    if (event) event.preventDefault();

    const filterLinks = document.querySelectorAll('#filterContainer .filter-link');
    filterLinks.forEach(link => link.classList.remove('active'));

    if (element) {
        element.classList.add('active');
    }

    const items = document.querySelectorAll('.project-item');
    const flowerRow = document.getElementById('flowerRow');

    if (!flowerRow) {
        console.warn("flowerRow element not found when filtering projects");
        return;
    }

    items.forEach(item => {
        if (category === 'all') {
            item.style.display = 'block';
        } else if (item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    flowerRow.style.display = category === 'featured' ? 'block' : 'none';
}
