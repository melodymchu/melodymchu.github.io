function filterProjects(category, element, event) {
    if (event) event.preventDefault(); // Prevent default if event is provided

    // Remove "active" class from all filter links
    const filterLinks = document.querySelectorAll('#filterContainer .filter-link');
    filterLinks.forEach(link => link.classList.remove('active'));

    // Add "active" class to the clicked filter link
    if (element) {
        element.classList.add('active');
    }

    // Check for 'featured' category default tab activation
    if (!element && category === 'featured') {
        const featuredTab = document.querySelector('#filterContainer .filter-link[onclick*="featured"]');
        if (featuredTab && !featuredTab.classList.contains('active')) {
            console.log("Defaulting to featured tab");
            featuredTab.classList.add('active');
            // Avoid recursion by not re-calling filterProjects here
        }
    }

    // Filter the project items based on category
    const items = document.querySelectorAll('.project-item'); // Select all project items
    // const flowerRow = document.getElementById('flowerRow'); // Select the flowerRow

    // if (!flowerRow) {
    //     console.warn("flowerRow element not found");
    // } else {
    //     // Show flowerRow only if "Featured" tab is selected
    //     flowerRow.style.display = category === 'featured' ? 'block' : 'none';
    // }

    if (!items.length) {
        console.warn("No project items found to filter");
        return;
    }

    items.forEach(item => {
        if (category === 'all') {
            item.style.display = 'block'; // Show all items
        } else if (item.classList.contains(category)) {
            item.style.display = 'block'; // Show items that match the category
        } else {
            item.style.display = 'none'; // Hide items that don't match
        }
    });
}


// // Load flowers function remains the same as before
// function loadFlowers() {
//     const flowerRow = document.getElementById('flowerRow');
//     if (!flowerRow) {
//         console.warn("flowerRow not found!");
//         return;
//     }

//     // Clear any existing flowers to avoid duplication
//     flowerRow.innerHTML = '';

//     const flowerImages = [
//         'images/Project-Thumbnails/Murakami-Flowers-Thumbnail.png',
//         'images/Project-Thumbnails/pet-simulator-thumbnail.png',
//         'images/Project-Thumbnails/a-light-from-phipps-thumbnail.png',
//         'images/Project-Thumbnails/squares-&-ampersands-thumbnail.png',
//         'images/Project-Thumbnails/business-card-thumbnail.jpg'
//     ];

//     const flowerLinks = [
//         'https://melodymchu.github.io/project-pages/Murakami-Flowers.html',
//         'https://melodymchu.github.io/project-pages/Pet-Simulator.html',
//         'https://melodymchu.github.io/project-pages/A-Light-From-Phipps.html',
//         'https://melodymchu.github.io/project-pages/Squares-&-Ampersands.html',
//         'https://melodymchu.github.io/project-pages/business-card.html'
//     ];

//     const flowerNames = [
//         'Murakami System',
//         'Hack112 Pet Simulator',
//         'A Light From Phipps',
//         'Squares & Ampersands',
//         'Laser-Cut Business Card'
//     ];

//     const flowerTags = [
//         ['Graphic Design', 'Design System'],
//         ['Game UI', 'Illustration'],
//         ['Product Design', 'CAD Modeling'],
//         ['Composition', 'Graphic Design'],
//         ['Product Design', 'Laser Cutting']
//     ];

//     const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//     const getRandomBaseColor = () => ({
//         hue: getRandomInt(0, 360),
//         saturation: 80,
//         lightness: 90
//     });

//     const createFlower = (imageSrc, linkHref, flowerNameText, tags) => {
//         const flowerLink = document.createElement('a');
//         flowerLink.href = linkHref;
//         flowerLink.classList.add('flower-link');

//         const flower = document.createElement('div');
//         flower.classList.add('flower');
//         flower.style.maxWidth = '20vw';
//         const nameContainer = document.createElement('div');
//         nameContainer.classList.add('flower-name-container');

//         const name = document.createElement('div');
//         name.classList.add('flower-name');
//         name.textContent = flowerNameText;
//         nameContainer.appendChild(name);

//         flower.appendChild(nameContainer);

//         const baseColor = getRandomBaseColor();
//         const numberOfPetals = getRandomInt(5, 8);
//         const baseBorderRadius = Array(4).fill(0).map(() => getRandomInt(40, 60));

//         const stem = document.createElement('div');
//         stem.classList.add('stem');
//         stem.style.height = `150px`;
//         stem.style.transform = 'translateY(50px)';

//         flower.appendChild(stem);
//         tags.forEach((tag, index) => {
//             const leaf = document.createElement('div');
//             leaf.classList.add('leaf', `leaf${index + 1}`);
//             leaf.style.top = `-40px`;
//             leaf.style.left = `${index === 0 ? -20 : 20}px`;
//             leaf.style.transform = `rotate(${index === 0 ? 30 : -30}deg)`;

//             const leafTag = document.createElement('div');
//             leafTag.classList.add('leaf-tag');
//             leafTag.style.top = (parseInt(leaf.style.top, 10) - 20) + 'px';
//             leafTag.style.left = `${index === 0 ? -48 : 48}px`;
//             leafTag.textContent = tag;
//             leafTag.style.textDecoration = 'none';

//             const leafContainer = document.createElement('div');
//             leafContainer.classList.add('leaf-container');
//             leafContainer.appendChild(leaf);
//             leafContainer.appendChild(leafTag);

//             flower.appendChild(leafContainer);
//         });

//         const petalsFragment = document.createDocumentFragment();
//         for (let i = 0; i < numberOfPetals; i++) {
//             const petal = document.createElement('div');
//             petal.classList.add('petal');

//             const petalHue = (baseColor.hue + getRandomInt(-15, 15) + 360) % 360;
//             const petalLightness = Math.max(0, Math.min(100, baseColor.lightness + getRandomInt(-5, 5)));

//             petal.style.backgroundColor = `hsl(${petalHue}, ${baseColor.saturation}%, ${petalLightness}%)`;
//             petal.style.width = '110px';
//             petal.style.height = `60px`;

//             const borderRadius = baseBorderRadius.map(val => val + getRandomInt(0, 2));
//             petal.style.borderRadius = `${borderRadius.join('% ')}%`;

//             const angle = (360 / numberOfPetals) * i;
//             petal.style.position = 'absolute';
//             petal.style.transform = `rotate(${angle}deg) translate(40px)`;

//             petalsFragment.appendChild(petal);
//         }

//         flower.appendChild(petalsFragment);

//         const center = document.createElement('div');
//         center.classList.add('center');
//         const pot = document.createElement('div');
//         pot.classList.add('pot');
//         const image = document.createElement('img');
//         image.src = imageSrc;
//         image.alt = 'Flower Image';
//         image.loading = 'lazy';
//         center.appendChild(image);

//         flower.appendChild(center);
//         flower.appendChild(pot);
//         flower.appendChild(nameContainer);
//         flowerLink.appendChild(flower);
//         return flowerLink;
//     };

//     const flowersFragment = document.createDocumentFragment();
//     flowerImages.forEach((imageSrc, i) => {
//         flowersFragment.appendChild(createFlower(imageSrc, flowerLinks[i], flowerNames[i], flowerTags[i]));
//     });
//     flowerRow.appendChild(flowersFragment);
// }

document.addEventListener('DOMContentLoaded', () => {
    const featuredTab = document.querySelector('#filterContainer .filter-link[onclick*="featured"]');
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

    if (featuredTab) {
        filterProjects('featured', featuredTab, null);
    } else {
        console.warn("featuredTab not found in DOM");
    }

});
document.addEventListener('click', function (event) {
    // Get all open <details> elements
    const openDetails = document.querySelectorAll('details[open]');

    openDetails.forEach(details => {
        // Check if the click is outside the <details> element
        if (!details.contains(event.target)) {
            details.removeAttribute('open'); // Close the details
        }
    });
});
// function expandImage(img) {
//     const overlay = document.getElementById("gallery");
//     const expandedImg = document.getElementById("expandedImg");
//     expandedImg.src = img.src;
//     overlay.classList.add("show");
// }


//  // Function to generate a gallery and modal
//  function createGallery(containerId, images) {
//     // Get the container element
//     const container = document.getElementById(containerId);

//     // Create gallery and modal elements
//     const galleryElement = document.createElement("div");
//     galleryElement.className = "gallery";

//     const modalElement = document.createElement("div");
//     modalElement.className = "modal";
//     modalElement.innerHTML = `
//         <span class="close cursor" onclick="closeModal('${containerId}')">&times;</span>
//         <div class="modal-content" id="${containerId}-modal-content"></div>
//         <a class="prev" onclick="plusSlides(-1, '${containerId}')">&#10094;</a>
//         <a class="next" onclick="plusSlides(1, '${containerId}')">&#10095;</a>
//         <div class="caption-container">
//             <p id="${containerId}-caption"></p>
//         </div>
//     `;

//     // Add gallery and modal content dynamically
//     images.forEach((image, index) => {
//         // Add image to the gallery
//         const galleryColumn = document.createElement("div");
//         galleryColumn.className = "gallery-column";
//         galleryColumn.innerHTML = `
//             <img src="${image.src}" style="width:100%" 
//                 onclick="openModal('${containerId}');currentSlide(${index + 1}, '${containerId}')" class="hover-shadow cursor">
//         `;
//         galleryElement.appendChild(galleryColumn);

//         // Add image to the modal
//         const modalSlide = document.createElement("div");
//         modalSlide.className = "mySlides";
//         modalSlide.innerHTML = `
//             <div class="numbertext">${index + 1} / ${images.length}</div>
//             <img src="${image.src}" style="width:100%">
//         `;
//         modalElement.querySelector(`#${containerId}-modal-content`).appendChild(modalSlide);
//     });

//     // Append the gallery and modal to the container
//     container.appendChild(galleryElement);
//     container.appendChild(modalElement);
// }

// // Open the modal
// function openModal(containerId) {
//     document.querySelector(`#${containerId}-container .modal`).style.display = "block";
// }

// // Close the modal
// function closeModal(containerId) {
//     document.querySelector(`#${containerId}-container .modal`).style.display = "none";
// }

// // Show the current slide
// function currentSlide(n, containerId) {
//     showSlides((slideIndex[containerId] = n), containerId);
// }

// // Navigate slides
// function plusSlides(n, containerId) {
//     showSlides((slideIndex[containerId] += n), containerId);
// }

// // Show slides
// const slideIndex = {}; // Track slide index for each gallery
// function showSlides(n, containerId) {
//     const slides = document.querySelectorAll(`#${containerId}-container .mySlides`);
//     const captionText = document.getElementById(`${containerId}-caption`);

//     if (!slides.length) return; // No slides available

//     if (n > slides.length) slideIndex[containerId] = 1;
//     if (n < 1) slideIndex[containerId] = slides.length;

//     slides.forEach((slide) => (slide.style.display = "none"));
//     slides[slideIndex[containerId] - 1].style.display = "block";
//     captionText.innerHTML = images[slideIndex[containerId] - 1].caption;
// }

// // Create two separate galleries
// const gallery1Images = [
//     {src:"https://melodymchu.github.io/images/Junk-Jenius/brainstorming.jpg",src:"https://melodymchu.github.io/images/Junk-Jenius/chalkboard-brainstorm.jpg",src: "https://melodymchu.github.io/images/Junk-Jenius/process-1.jpg", src: "https://melodymchu.github.io/images/Junk-Jenius/process-01.jpg", src: "https://melodymchu.github.io/images/Junk-Jenius/brainstorming.jpg", caption: "Brainstorming" },
//     { src: "https://melodymchu.github.io/images/Junk-Jenius/chalkboard-brainstorm.jpg", caption: "Chalkboard Brainstorm" },
// ];

// const gallery2Images = [
//     {  src:"https://melodymchu.github.io/images/Junk-Jenius/linkage-mechanism.jpg",
//     src:"https://melodymchu.github.io/images/Junk-Jenius/linkage-cad.png"},
// ];

// createGallery("gallery1-container", gallery1Images);
// createGallery("gallery2-container", gallery2Images);

// // Initialize slideIndex for each gallery
// slideIndex["gallery1-container"] = 1;
// slideIndex["gallery2-container"] = 1;

// // Initialize slides for each gallery
// showSlides(slideIndex["gallery1-container"], "gallery1-container");
// showSlides(slideIndex["gallery2-container"], "gallery2-container");



    // Function to generate a gallery and modal
    function createGallery(containerId, images) {
        // Get the container element
        const container = document.getElementById(containerId);

        // Create gallery and modal elements
        const galleryElement = document.createElement("div");
        galleryElement.className = "gallery";

        const modalElement = document.createElement("div");
        modalElement.className = "modal";
        modalElement.innerHTML = `
            <span class="close cursor" onclick="closeModal('${containerId}')">&times;</span>
            <div class="modal-content" id="${containerId}-modal-content"></div>
            <a class="prev" onclick="plusSlides(-1, '${containerId}')">&#10094;</a>
            <a class="next" onclick="plusSlides(1, '${containerId}')">&#10095;</a>
            <div class="caption-container">
                <p id="${containerId}-caption"></p>
            </div>
        `;

        // Add gallery and modal content dynamically
        images.forEach((image, index) => {
            // Add image to the gallery
            const galleryColumn = document.createElement("div");
            galleryColumn.className = "gallery-column";
            galleryColumn.innerHTML = `
                <img src="${image.src}" style="width:100%" 
                    onclick="openModal('${containerId}');currentSlide(${index + 1}, '${containerId}', ${JSON.stringify(
                images
            )})" class="hover-shadow cursor">
            `;
            galleryElement.appendChild(galleryColumn);

            // Add image to the modal
            const modalSlide = document.createElement("div");
            modalSlide.className = "mySlides";
            modalSlide.innerHTML = `
                <div class="numbertext">${index + 1} / ${images.length}</div>
                <img src="${image.src}" style="width:100%">
            `;
            modalElement.querySelector(`#${containerId}-modal-content`).appendChild(modalSlide);
        });

        // Append the gallery and modal to the container
        container.appendChild(galleryElement);
        container.appendChild(modalElement);
    }

    // Open the modal
    function openModal(containerId) {
        document.querySelector(`#${containerId} .modal`).style.display = "block";
    }

    // Close the modal
    function closeModal(containerId) {
        document.querySelector(`#${containerId} .modal`).style.display = "none";
    }

    // Show the current slide
    function currentSlide(n, containerId, images) {
        showSlides((slideIndex[containerId] = n), containerId, images);
    }

    // Navigate slides
    function plusSlides(n, containerId) {
        showSlides((slideIndex[containerId] += n), containerId, currentImages[containerId]);
    }

    // Show slides
    const slideIndex = {}; // Track slide index for each gallery
    const currentImages = {}; // Store images for each gallery
    function showSlides(n, containerId, images) {
        currentImages[containerId] = images; // Store images for this gallery

        const slides = document.querySelectorAll(`#${containerId} .mySlides`);
        const captionText = document.getElementById(`${containerId}-caption`);

        if (!slides.length) return; // No slides available

        if (n > slides.length) slideIndex[containerId] = 1;
        if (n < 1) slideIndex[containerId] = slides.length;

        slides.forEach((slide) => (slide.style.display = "none"));
        slides[slideIndex[containerId] - 1].style.display = "block";
        captionText.innerHTML = images[slideIndex[containerId] - 1].caption;
    }

    // Create two separate galleries
    const gallery1Images = [
        { src: "https://melodymchu.github.io/images/Junk-Jenius/brainstorming.jpg", caption: "Brainstorming" },
        { src: "https://melodymchu.github.io/images/Junk-Jenius/chalkboard-brainstorm.jpg", caption: "Chalkboard Brainstorm" },
        { src: "https://melodymchu.github.io/images/Junk-Jenius/process-1.jpg", caption: "Process 1" },
        { src: "https://melodymchu.github.io/images/Junk-Jenius/process-01.jpg", caption: "Process 01" },
    ];

    const gallery2Images = [
        { src: "https://melodymchu.github.io/images/Junk-Jenius/linkage-mechanism.jpg", caption: "Linkage Mechanism" },
        { src: "https://melodymchu.github.io/images/Junk-Jenius/linkage-cad.png", caption: "Linkage CAD" },
    ];

    createGallery("gallery1-container", gallery1Images);
    createGallery("gallery2-container", gallery2Images);

    // Initialize slideIndex for each gallery
    slideIndex["gallery1-container"] = 1;
    slideIndex["gallery2-container"] = 1;

    // Initialize slides for each gallery
    showSlides(slideIndex["gallery1-container"], "gallery1-container", gallery1Images);
    showSlides(slideIndex["gallery2-container"], "gallery2-container", gallery2Images);












    
// Get the modal
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Add event listeners to all images in galleries
document.querySelectorAll('.gallery img').forEach(function(img) {
  img.addEventListener('click', function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
};