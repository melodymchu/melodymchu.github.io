// // document.addEventListener('DOMContentLoaded', () => {
// //     const backToTopButton = document.getElementById("backToTop");

// //     if (backToTopButton) {
// //         backToTopButton.addEventListener("click", (event) => {
// //             event.preventDefault();
// //             window.scrollTo({ top: 0, behavior: "smooth" });
// //         });

// //         let scrollScheduled = false;
// //         window.addEventListener('scroll', () => {
// //             if (!scrollScheduled) {
// //                 scrollScheduled = true;
// //                 requestAnimationFrame(() => {
// //                     backToTopButton.style.display = window.scrollY > 100 ? "block" : "none";
// //                     scrollScheduled = false;
// //                 });
// //             }
// //         });
// //     }

// //     // Event delegation for filter links to avoid directly using `onclick` in HTML
// //     const filterContainer = document.getElementById('filterContainer');
// //     if (filterContainer) {
// //         filterContainer.addEventListener('click', (event) => {
// //             const target = event.target;
// //             if (target.classList.contains('filter-link')) {
// //                 const category = target.getAttribute('data-category'); // Assumes `data-category` contains the category
// //                 filterProjects(category, target, event);
// //             }
// //         });
// //     }

// //     // Ensure `flowerRow` exists before calling `filterProjects` for the first time
// //     const featuredTab = document.querySelector('#filterContainer .filter-link[onclick*="featured"]');
// //     const flowerRow = document.getElementById('flowerRow');

// //     if (featuredTab && flowerRow) {
// //         // Call `filterProjects` for "featured" only if `flowerRow` is available
// //         filterProjects('featured', featuredTab, null);
// //     } else if (!flowerRow) {
// //         console.warn("flowerRow element not found in DOM at load time");
// //     } else {
// //         console.warn("featuredTab not found in DOM");
// //     }

// //     if (flowerRow) {
// //         const observer = new IntersectionObserver((entries, observer) => {
// //             entries.forEach(entry => {
// //                 if (entry.isIntersecting) {
// //                     console.log("flowerRow is in view");
// //                     loadFlowers();
// //                     observer.disconnect(); // Ensure `loadFlowers` only runs once
// //                 }
// //             });
// //         }, { rootMargin: "100px" });

// //         setTimeout(() => observer.observe(flowerRow), 100); // Delay observer to ensure flowerRow is ready in DOM
// //     }
// // });

// // // Updated filterProjects function with additional `flowerRow` check
// // function filterProjects(category, element, event) { 
// //     if (event) event.preventDefault();

// //     // Ensure flowerRow exists before proceeding
// //     const flowerRow = document.getElementById('flowerRow');
// //     if (!flowerRow) {
// //         console.warn("flowerRow element not found when filtering projects");
// //         return;
// //     }

// //     // Remove "active" class from all filter links
// //     const filterLinks = document.querySelectorAll('#filterContainer .filter-link');
// //     filterLinks.forEach(link => link.classList.remove('active'));

// //     // Add "active" class to the clicked filter link
// //     if (element) {
// //         element.classList.add('active');
// //     }

// //     // Filter the project items based on category
// //     const items = document.querySelectorAll('.project-item');

// //     items.forEach(item => {
// //         if (category === 'all') {
// //             item.style.display = 'block';
// //         } else if (item.classList.contains(category)) {
// //             item.style.display = 'block';
// //         } else {
// //             item.style.display = 'none';
// //         }
// //     });

// //     // Show flowerRow only if "Featured" tab is selected
// //     flowerRow.style.display = category === 'featured' ? 'block' : 'none';
// // }
// document.addEventListener('DOMContentLoaded', () => {
//     const backToTopButton = document.getElementById("backToTop");

//     if (backToTopButton) {
//         backToTopButton.addEventListener("click", (event) => {
//             event.preventDefault();
//             window.scrollTo({ top: 0, behavior: "smooth" });
//         });

//         let scrollScheduled = false;
//         window.addEventListener('scroll', () => {
//             if (!scrollScheduled) {
//                 scrollScheduled = true;
//                 requestAnimationFrame(() => {
//                     backToTopButton.style.display = window.scrollY > 100 ? "block" : "none";
//                     scrollScheduled = false;
//                 });
//             }
//         });
//     }

//     const filterContainer = document.getElementById('filterContainer');
//     const flowerRow = document.getElementById('flowerRow');

//     if (filterContainer && flowerRow) {
//         // This code only runs on the portfolio page where filterContainer exists
//         filterContainer.addEventListener('click', (event) => {
//             const target = event.target;
//             if (target.classList.contains('filter-link')) {
//                 const category = target.getAttribute('data-category');
//                 filterProjects(category, target, event);
//             }
//         });

//         // Activate the "featured" filter by default on the portfolio page
//         const featuredTab = document.querySelector('#filterContainer .filter-link[onclick*="featured"]');
//         if (featuredTab) {
//             filterProjects('featured', featuredTab, null);
//         } else {
//             console.warn("featuredTab not found in DOM");
//         }
//     } else if (flowerRow) {
//         // This code runs on the index page, where `flowerRow` should display by default
//         flowerRow.style.display = 'block';
//     }

//     if (flowerRow) {
//         const observer = new IntersectionObserver((entries, observer) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     console.log("flowerRow is in view");
//                     loadFlowers();
//                     observer.disconnect(); // Ensure `loadFlowers` only runs once
//                 }
//             });
//         }, { rootMargin: "100px" });

//         setTimeout(() => observer.observe(flowerRow), 100); // Delay observer to ensure flowerRow is ready in DOM
//     }
// });

// // Updated filterProjects function to check for flowerRow before filtering
// function filterProjects(category, element, event) { 
//     if (event) event.preventDefault();

//     const flowerRow = document.getElementById('flowerRow');
//     if (!flowerRow) {
//         console.warn("flowerRow element not found when filtering projects");
//         return;
//     }

//     // Remove "active" class from all filter links
//     const filterLinks = document.querySelectorAll('#filterContainer .filter-link');
//     filterLinks.forEach(link => link.classList.remove('active'));

//     // Add "active" class to the clicked filter link
//     if (element) {
//         element.classList.add('active');
//     }

//     // Filter the project items based on category
//     const items = document.querySelectorAll('.project-item');

//     items.forEach(item => {
//         if (category === 'all') {
//             item.style.display = 'block';
//         } else if (item.classList.contains(category)) {
//             item.style.display = 'block';
//         } else {
//             item.style.display = 'none';
//         }
//     });

//     // Show flowerRow only if "Featured" tab is selected
//     flowerRow.style.display = category === 'featured' ? 'block' : 'none';
// }

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

    // Ensure `flowerRow` exists before calling `filterProjects` for the first time
    const featuredTab = document.querySelector('#filterContainer .filter-link[onclick*="featured"]');
    const flowerRow = document.getElementById('flowerRow');
    if (featuredTab && flowerRow) {
        // Call `filterProjects` for "featured" only if `flowerRow` is available
        filterProjects('featured', featuredTab, null);
    } else if (!flowerRow) {
        console.warn("flowerRow element not found in DOM at load time");
    } else {
        console.warn("featuredTab not found in DOM");
    }

    if (flowerRow) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
@@ -52,39 +56,42 @@
        }, { rootMargin: "100px" });

        setTimeout(() => observer.observe(flowerRow), 100); // Delay observer to ensure flowerRow is ready in DOM
    }
});

// Updated filterProjects function with additional `flowerRow` check
function filterProjects(category, element, event) { 
    if (event) event.preventDefault();

    // Ensure flowerRow exists before proceeding
    const flowerRow = document.getElementById('flowerRow');
    if (!flowerRow) {
        console.warn("flowerRow element not found when filtering projects");
        return;
    }
    // Remove "active" class from all filter links
    const filterLinks = document.querySelectorAll('#filterContainer .filter-link');
    filterLinks.forEach(link => link.classList.remove('active'));

    // Add "active" class to the clicked filter link
    if (element) {
        element.classList.add('active');
    }

    // Filter the project items based on category
    const items = document.querySelectorAll('.project-item');

    items.forEach(item => {
        if (category === 'all') {
            item.style.display = 'block';
        } else if (item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    // Show flowerRow only if "Featured" tab is selected
    flowerRow.style.display = category === 'featured' ? 'block' : 'none';
}