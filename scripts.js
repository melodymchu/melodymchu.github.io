document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById("backToTop");

    if (backToTopButton) {
        backToTopButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    window.onscroll = function () {
        if (backToTopButton) {
            backToTopButton.style.display = window.scrollY > 100 ? "block" : "none";
        }
    };

    window.onload = function () {
        const flowerRow = document.getElementById('flowerRow');

        // Array of image paths for each flower
        const flowerImages = [
            'images/33c3ed0d0a6b9f660a76fef9a287c890.png',
            'images/lemon-312068_1280.png',
            'images/simple-black-flower-outline.png'
            // Add more image paths as needed
        ];

        // Array of links for each flower
        const flowerLinks = [
            'https://melodymchu.github.io/Murakami-Flowers.html',
            'https://melodymchu.github.io/Murakami-Flowers.html',
            'https://melodymchu.github.io/Murakami-Flowers.html'
            // Add more URLs as needed
        ];

        // Function to generate a random number between min and max
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        // Function to generate random color in HSL format
        function getRandomBaseColor() {
            const hue = getRandomInt(0, 360); // Random hue
            const saturation = getRandomInt(30, 80); // Saturation %
            const lightness = getRandomInt(80, 90); // Lightness %
            return { hue, saturation, lightness };
        }

        // Function to create a single flower
        function createFlower(imageSrc, linkHref) {
            // Create anchor element for the clickable link
            const flowerLink = document.createElement('a');
            flowerLink.href = linkHref;
            flowerLink.classList.add('flower-link'); // Optional: Add a class for styling

            const flower = document.createElement('div');
            flower.classList.add('flower');

            // Generate a random base color in HSL format
            const baseColor = getRandomBaseColor();

            // Generate a random number of petals between 5 and 10
            const numberOfPetals = getRandomInt(5, 10);

            // Calculate base petal size based on the number of petals
            const baseWidth = 120 - numberOfPetals * 2; // Smaller width for more petals
            const baseHeight = 70 - numberOfPetals * 2; // Smaller height for more petals

            // Generate base shape for petals
            const baseBorderRadius = [
                getRandomInt(40, 60),
                getRandomInt(40, 60),
                getRandomInt(40, 60),
                getRandomInt(40, 60),
            ];

            // Create stem
            const stem = document.createElement('div');
            stem.classList.add('stem');
            flower.appendChild(stem);

            // Create leaves
            for (let i = 1; i <= 2; i++) {
                const leaf = document.createElement('div');
                leaf.classList.add('leaf', `leaf${i}`);

                // Randomize leaf position
                const leafTop = getRandomInt(140, 200);
                const leafLeft = i === 1 ? -20 : 20;
                const leafRotate = i === 1 ? 30 : -30;

                leaf.style.top = `${leafTop}px`;
                leaf.style.left = `${leafLeft}px`;
                leaf.style.transform = `rotate(${leafRotate}deg)`;

                flower.appendChild(leaf);
            }

            // Create petals with variations of the base color and shape
            for (let i = 0; i < numberOfPetals; i++) {
                const petal = document.createElement('div');
                petal.classList.add('petal');

                // Vary the hue slightly for each petal
                const hueVariation = getRandomInt(-15, 15); // Small variation in hue
                const lightnessVariation = getRandomInt(-5, 5); // Small variation in lightness
                const petalHue = (baseColor.hue + hueVariation + 360) % 360; // Ensure hue stays in 0-360 range
                const petalLightness = Math.max(0, Math.min(100, baseColor.lightness + lightnessVariation)); // Clamp lightness between 0-100

                petal.style.backgroundColor = `hsl(${petalHue}, ${baseColor.saturation}%, ${petalLightness}%)`;

                // Calculate petal size with slight variations around the base size
                const widthVariation = getRandomInt(0, 4); // Slight random variation in width
                const heightVariation = getRandomInt(0, 4); // Slight random variation in height
                petal.style.width = `${baseWidth + widthVariation}px`;
                petal.style.height = `${baseHeight + heightVariation}px`;

                // Make petals more organic-shaped using border-radius and transform
                const borderRadius = baseBorderRadius.map(val => val + getRandomInt(0, 2)); // Slight variation for each petal
                petal.style.borderRadius = `${borderRadius[0]}% ${borderRadius[1]}% ${borderRadius[2]}% ${borderRadius[3]}%`;

                // Calculate angle for each petal to evenly distribute them around the center
                const angle = (360 / numberOfPetals) * i;
                const radius = 40; // Distance from the center of the flower to the petal

                // Position petals using CSS transform to rotate and translate them
                petal.style.position = 'absolute';
                petal.style.top = '55px';
                petal.style.transform = `rotate(${angle}deg) translate(${radius}px)`;

                flower.appendChild(petal);
            }

            // Create flower center
            const center = document.createElement('div');
            center.classList.add('center');
            flower.appendChild(center);

            // Add the image to the center
            const image = document.createElement('img');
            image.src = imageSrc; // Use the provided image source
            image.alt = 'Flower Image';
            center.appendChild(image);

            // Append flower to the link
            flowerLink.appendChild(flower);

            return flowerLink;
        }

        // Generate flowers with specific images and links
        for (let i = 0; i < flowerImages.length; i++) {
            const flower = createFlower(flowerImages[i], flowerLinks[i]);
            flowerRow.appendChild(flower);
        }

        // Additional JavaScript (cloud generation, etc.) can follow here
    };
});
