document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById("backToTop");

    if (backToTopButton) {
        backToTopButton.addEventListener("click", (event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

        // Efficient scroll event handling with requestAnimationFrame
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

    // Load flowers when the container is in view using Intersection Observer
    const flowerRow = document.getElementById('flowerRow');

    if (flowerRow) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadFlowers();
                    observer.disconnect(); // Stop observing once flowers are loaded
                }
            });
        }, { rootMargin: "100px" }); // Preload flowers just before they appear

        observer.observe(flowerRow);
    }

    function loadFlowers() {
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

        const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

        const getRandomBaseColor = () => ({
            hue: getRandomInt(0, 360),
            saturation: 80,
            lightness: 90
        });

        const createFlower = (imageSrc, linkHref, flowerNameText) => {
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

            // Append name and container
            flower.appendChild(nameContainer);
            flower.appendChild(name);

            // Resize text to fit within two lines
            resizeText(nameContainer, name, 2);

            // Add the rest of the flower structure (petals, stem, etc.)
            // Your existing code for petals, stem, and other elements goes here...


            const baseColor = getRandomBaseColor();
            const numberOfPetals = getRandomInt(5, 8);
            const baseWidth = 120 - numberOfPetals * 2;
            const baseHeight = 70 - numberOfPetals * 2;
            const baseBorderRadius = Array(4).fill(0).map(() => getRandomInt(40, 60));

            const stem = document.createElement('div');
            stem.classList.add('stem');
            stem.style.height = `${getRandomInt(150, 280)}px`;
            stem.style.transform = 'translateY(50px)'; // Move 50px to the right

            flower.appendChild(stem);

            for (let i = 1; i <= 2; i++) {
                const leaf = document.createElement('div');
                leaf.classList.add('leaf', `leaf${i}`);
                leaf.style.top = `${getRandomInt(-60, 0)}px`;
                leaf.style.left = `${i === 1 ? -20 : 20}px`;
                leaf.style.transform = `rotate(${i === 1 ? 30 : -30}deg)`;
                flower.appendChild(leaf);
            }

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
            image.loading = 'lazy';  // Lazy loading optimization
            center.appendChild(image);

            flower.appendChild(center);
            flower.appendChild(pot);
            flower.appendChild(nameContainer);
            flower.appendChild(name);
            flowerLink.appendChild(flower);
            return flowerLink;
        };

        const flowersFragment = document.createDocumentFragment();
        flowerImages.forEach((imageSrc, i) => {
            flowersFragment.appendChild(createFlower(imageSrc, flowerLinks[i], flowerNames[i]));
        });
        flowerRow.appendChild(flowersFragment);
    }
});
function resizeText(container, textElement, maxLines) {
    // Make elements temporarily visible to calculate dimensions if hidden
    const initialDisplay = container.style.display;
    container.style.display = "block";
    textElement.style.display = "block";

    let fontSize = parseFloat(window.getComputedStyle(textElement).fontSize);
    let lineHeight = parseFloat(window.getComputedStyle(textElement).lineHeight);
    if (isNaN(lineHeight)) {
        lineHeight = fontSize * 1.2;
    }

    const maxHeight = lineHeight * maxLines;
    const containerWidth = parseFloat(window.getComputedStyle(container).width);

    // Reduce font size until the text fits within the height and width constraints
    while ((textElement.scrollHeight > maxHeight || textElement.scrollWidth > containerWidth) && fontSize > 1) {
        fontSize -= 0.5;
        textElement.style.fontSize = `${fontSize}px`;

        // Recalculate line height in case it scales with font size
        lineHeight = parseFloat(window.getComputedStyle(textElement).lineHeight) || fontSize * 1.2;
    }

    // Revert the display style if it was initially hidden
    container.style.display = initialDisplay;
    textElement.style.display = initialDisplay;
}
