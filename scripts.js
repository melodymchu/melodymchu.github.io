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
        if (featuredTab) {
            console.log("Defaulting to featured tab");
            featuredTab.classList.add('active');
            filterProjects('featured', featuredTab, null);
            return;
        }
    }

    // Filter the project items based on category
    const items = document.querySelectorAll('.project-item'); // Select all project items
    const flowerRow = document.getElementById('flowerRow'); // Select the flowerRow

    if (!flowerRow) {
        console.warn("flowerRow element not found");
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

    // Show flowerRow only if "Featured" tab is selected
    flowerRow.style.display = category === 'featured' ? 'block' : 'none';
}

// Load flowers function remains the same as before
function loadFlowers() {
    const flowerRow = document.getElementById('flowerRow');
    if (!flowerRow) {
        console.warn("flowerRow not found!");
        return;
    }

    // Clear any existing flowers to avoid duplication
    flowerRow.innerHTML = '';

    const flowerImages = [
        'images/Project-Thumbnails/Murakami-Flowers-Thumbnail.png',
        'images/Project-Thumbnails/pet-simulator-thumbnail.png',
        'images/Project-Thumbnails/a-light-from-phipps-thumbnail.png',
        'images/Project-Thumbnails/squares-&-ampersands-thumbnail.png',
        'images/Project-Thumbnails/business-card-thumbnail.jpg'
    ];

    const flowerLinks = [
        'https://melodymchu.github.io/project-pages/Murakami-Flowers.html',
        'https://melodymchu.github.io/project-pages/Pet-Simulator.html',
        'https://melodymchu.github.io/project-pages/A-Light-From-Phipps.html',
        'https://melodymchu.github.io/project-pages/Squares-&-Ampersands.html',
        'https://melodymchu.github.io/project-pages/business-card.html'
    ];

    const flowerNames = [
        'Murakami System',
        'Pet Simulator',
        'A Light From Phipps',
        'Squares & Ampersands',
        'Laser-Cut Business Card'
    ];

    const flowerTags = [
        ['Graphic Design', 'Design System'],
        ['Game UI', 'Illustration'],
        ['Product Design', 'CAD Modeling'],
        ['Composition', 'Graphic Design'],
        ['Product Design', 'Laser Cutting']
    ];

    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const getRandomBaseColor = () => ({
        hue: getRandomInt(0, 360),
        saturation: 80,
        lightness: 90
    });

    const createFlower = (imageSrc, linkHref, flowerNameText, tags) => {
        const flowerLink = document.createElement('a');
        flowerLink.href = linkHref;
        flowerLink.classList.add('flower-link');

        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.maxWidth = '20vw';
        const nameContainer = document.createElement('div');
        nameContainer.classList.add('flower-name-container');

        const name = document.createElement('div');
        name.classList.add('flower-name');
        name.textContent = flowerNameText;
        nameContainer.appendChild(name);

        flower.appendChild(nameContainer);

        const baseColor = getRandomBaseColor();
        const numberOfPetals = getRandomInt(5, 8);
        const baseWidth = 120 - numberOfPetals * 2;
        const baseHeight = 70 - numberOfPetals * 2;
        const baseBorderRadius = Array(4).fill(0).map(() => getRandomInt(40, 60));

        const stem = document.createElement('div');
        stem.classList.add('stem');
        stem.style.height = `${getRandomInt(150, 300)}px`;
        stem.style.transform = 'translateY(50px)';

        flower.appendChild(stem);
        tags.forEach((tag, index) => {
            const leaf = document.createElement('div');
            leaf.classList.add('leaf', `leaf${index + 1}`);
            leaf.style.top = `${getRandomInt(-100, -60)}px`;
            leaf.style.left = `${index === 0 ? -20 : 20}px`;
            leaf.style.transform = `rotate(${index === 0 ? 30 : -30}deg)`;

            const leafTag = document.createElement('div');
            leafTag.classList.add('leaf-tag');
            leafTag.style.top = (parseInt(leaf.style.top, 10) - 20) + 'px';
            leafTag.style.left = `${index === 0 ? -48 : 48}px`;
            leafTag.textContent = tag;
            leafTag.style.textDecoration = 'none';

            const leafContainer = document.createElement('div');
            leafContainer.classList.add('leaf-container');
            leafContainer.appendChild(leaf);
            leafContainer.appendChild(leafTag);

            flower.appendChild(leafContainer);
        });

        const petalsFragment = document.createDocumentFragment();
        for (let i = 0; i < numberOfPetals; i++) {
            const petal = document.createElement('div');
            petal.classList.add('petal');

            const petalHue = (baseColor.hue + getRandomInt(-15, 15) + 360) % 360;
            const petalLightness = Math.max(0, Math.min(100, baseColor.lightness + getRandomInt(-5, 5)));

            petal.style.backgroundColor = `hsl(${petalHue}, ${baseColor.saturation}%, ${petalLightness}%)`;
            petal.style.width = `${baseWidth + getRandomInt(0, 4)}px`;
            petal.style.height = `${baseHeight + getRandomInt(0, 4)}px`;

            const borderRadius = baseBorderRadius.map(val => val + getRandomInt(0, 2));
            petal.style.borderRadius = `${borderRadius.join('% ')}%`;

            const angle = (360 / numberOfPetals) * i;
            petal.style.position = 'absolute';
            petal.style.transform = `rotate(${angle}deg) translate(40px)`;

            petalsFragment.appendChild(petal);
        }

        flower.appendChild(petalsFragment);

        const center = document.createElement('div');
        center.classList.add('center');
        const pot = document.createElement('div');
        pot.classList.add('pot');
        const image = document.createElement('img');
        image.src = imageSrc;
        image.alt = 'Flower Image';
        image.loading = 'lazy';
        center.appendChild(image);

        flower.appendChild(center);
        flower.appendChild(pot);
        flower.appendChild(nameContainer);
        flowerLink.appendChild(flower);
        return flowerLink;
    };

    const flowersFragment = document.createDocumentFragment();
    flowerImages.forEach((imageSrc, i) => {
        flowersFragment.appendChild(createFlower(imageSrc, flowerLinks[i], flowerNames[i], flowerTags[i]));
    });
    flowerRow.appendChild(flowersFragment);
}

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

    const featuredTab = document.querySelector('#filterContainer .filter-link[onclick*="featured"]');
    if (featuredTab) {
        filterProjects('featured', featuredTab, null);
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
                    observer.disconnect();
                }
            });
        }, { rootMargin: "100px" });

        observer.observe(flowerRow);
    }
});
