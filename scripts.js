// Run the code only after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript is running'); // Log message to confirm script is working

    // Select the "Back to Top" button
    const backToTopButton = document.getElementById("backToTop");

    // Check if "Back to Top" button exists before adding event listener
    if (backToTopButton) {
        backToTopButton.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default anchor click behavior
            window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
        });
    }

document.addEventListener("DOMContentLoaded", function () {
    const flowers = document.querySelectorAll('.flower');
    const featuredSection = document.getElementById('featured-projects');

    
    window.onload = function () {
        // Get the flower row container
        const flowerRow = document.getElementById('flowerRow');
    
        // Function to generate a random number between min and max
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    
        // Function to generate random color in HSL format
        function getRandomBaseColor() {
            const hue = getRandomInt(0, 360); // Random hue
            const saturation = getRandomInt(30, 80); // Saturation %
            const lightness = getRandomInt(40, 90); // Lightness %
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
            const baseWidth = 60 - numberOfPetals * 2; // Smaller width for more petals
            const baseHeight = 35 - numberOfPetals * 2; // Smaller height for more petals
    
            // Generate base shape for petals
            const baseBorderRadius = [
                getRandomInt(40, 60),
                getRandomInt(40, 60),
                getRandomInt(40, 60),
                getRandomInt(40, 60),
            ];
            // Create leaves
            for (let i = 1; i <= 2; i++) {
                const leaf = document.createElement('div');
                leaf.classList.add('leaf', `leaf${i}`);
    
                // Randomize leaf position
                const leafTop = getRandomInt(70, 100);
                const leafLeft = i === 1 ? -10 : 10;
                const leafRotate = i === 1 ? 30 : -30;
    
                leaf.style.top = `${leafTop}px`;
                leaf.style.left = `${leafLeft}px`;
                leaf.style.transform = `rotate(${leafRotate}deg)`;
    
                flower.appendChild(leaf);
            }
    
            // Create stem
            const stem = document.createElement('div');
            stem.classList.add('stem');
            flower.appendChild(stem);
    
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
                const widthVariation = getRandomInt(0, 2); // Slight random variation in width
                const heightVariation = getRandomInt(0, 2); // Slight random variation in height
                petal.style.width = `${baseWidth + widthVariation}px`;
                petal.style.height = `${baseHeight + heightVariation}px`;
    
                // Make petals more organic-shaped using border-radius and transform
                const borderRadius = baseBorderRadius.map(val => val + getRandomInt(0, 2)); // Slight variation for each petal
                petal.style.borderRadius = `${borderRadius[0]}% ${borderRadius[1]}% ${borderRadius[2]}% ${borderRadius[3]}%`;
                petal.style.transform = `rotate(${getRandomInt(-5, 5)}deg) scale(${getRandomInt(98, 102) / 100})`;
    
                // Calculate angle for each petal to evenly distribute them around the center
                const angle = (360 / numberOfPetals) * i;
                const radius = 20; // Distance from the center of the flower to the petal
                const x = radius * Math.cos((angle * Math.PI) / 180);
                const y = radius * Math.sin((angle * Math.PI) / 180);
    
                // Position petals using CSS transform to rotate and translate them
                //petal.style.position = 'absolute';
                //petal.style.top = '18px';
                //petal.style.left = '6px';
                //petal.style.transform += ` translate(${x}px, ${y}px) rotate(${angle}deg)`;
                
                // Adjust relative positioning of petals around the center
                petal.style.position = 'absolute';
                petal.style.top = '27px';
                petal.style.transform = `rotate(${angle}deg) translate(${radius}px)`;
    
                flower.appendChild(petal);
            }
    
            // Create center
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
    };
    
    






    // Function to filter projects based on selected category
    function filterProjects(category) {
        const projects = document.querySelectorAll('.project-item'); // Select all project items

        projects.forEach(project => {
            if (category === 'all') {
                project.style.display = 'block'; // Show all projects if 'all' is selected
            } else {
                // Show or hide projects based on category match
                if (project.classList.contains(category)) {
                    project.style.display = 'block'; // Show matching projects
                } else {
                    project.style.display = 'none'; // Hide non-matching projects
                }
            }
        });
    }

    // Show or hide the "Back to Top" button based on scroll position
    window.onscroll = function() {
        scrollFunction(); // Call scrollFunction whenever user scrolls
    };

    // Function to show or hide "Back to Top" button
    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            // Show button if user scrolls down more than 100px
            if (backToTopButton) {
                backToTopButton.style.display = "block";
            }
        } else {
            // Hide button if user scrolls up to less than 100px
            if (backToTopButton) {
                backToTopButton.style.display = "none";
            }
        }
    }
})})
