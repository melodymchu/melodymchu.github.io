document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById("backToTop");

    if (backToTopButton) {
        backToTopButton.addEventListener("click", function(event) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    window.onscroll = function() {
        if (backToTopButton) {
            backToTopButton.style.display = window.scrollY > 100 ? "block" : "none";
        }
    };


window.onload = function () {
    const flowerRow = document.getElementById('flowerRow');

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
    function createFlower() {
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

        return flower;
    }

    // Generate a random number of flowers
    const numberOfFlowers = 3;

    for (let i = 0; i < numberOfFlowers; i++) {
        const flower = createFlower();
        flowerRow.appendChild(flower);
    }
    document.addEventListener('DOMContentLoaded', function() {
        console.log('JavaScript is running'); // Confirm script is working
    
        const cloudContainer = document.querySelector('.cloud-container');

    
        // Function to create a cloud element with sliding animation
        function createCloud(positionIndex, totalClouds) {
            const cloud = document.createElement('div');
            cloud.classList.add('cloud');
    
            // Randomize cloud size
            const cloudWidth = getRandomInt(200, 300);
            const cloudHeight = getRandomInt(100, 150);
    
            // Set initial styles for the cloud
            cloud.style.width = `${cloudWidth}px`;
            cloud.style.height = `${cloudHeight}px`;
            cloud.style.background = "url('images/33c3ed0d0a6b9f660a76fef9a287c890.png') no-repeat";
            cloud.style.backgroundSize = 'contain';
            cloud.style.position = 'absolute';
            cloud.style.top = `${getRandomInt(10, 50)}%`;
            cloud.style.opacity = '0.8'; // Ensure cloud is visible
    
            // Determine if the cloud will come from the left or right
            const fromLeft = Math.random() < 0.5;
    
            const animationDuration = getRandomInt(2, 4); // Faster sliding animation between 2 and 4 seconds
    
            if (fromLeft) {
                cloud.style.left = `-${cloudWidth}px`; // Start off-screen to the left
                cloud.style.animation = `slideInRight ${animationDuration}s linear forwards`;
                console.log('Cloud created from left');
            } else {
                cloud.style.left = '100vw'; // Start off-screen to the right
                cloud.style.animation = `slideInLeft ${animationDuration}s linear forwards`;
                console.log('Cloud created from right');
            }
    
            // Add cloud to the container
            cloudContainer.appendChild(cloud);
    
            // Set final position after animation stops
            setTimeout(() => {
                const positionRatio = (positionIndex + 1) / (totalClouds + 1);
                cloud.style.left = `${positionRatio * 100}%`; // Spread out evenly
                cloud.style.animation = 'none'; // Stop animation after it ends
            }, animationDuration * 1000); // Convert duration to milliseconds
        }
    
        // Function to generate clouds at random intervals
        function generateClouds() {
            const numberOfClouds = 5; // Total number of clouds to generate
            console.log('Generating clouds...');
    
            for (let i = 0; i < numberOfClouds; i++) {
                setTimeout(() => createCloud(i, numberOfClouds), getRandomInt(500, 1500) * i); // Delay each cloud creation
            }
        }
    
        generateClouds(); // Start generating clouds
    });
    
};
});