document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById("backToTop");

    if (backToTopButton) {
        backToTopButton.addEventListener("click", (event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

        window.addEventListener('scroll', () => {
            backToTopButton.style.display = window.scrollY > 100 ? "block" : "none";
        });
    }

    window.onload = () => {
        const flowerRow = document.getElementById('flowerRow');
        const flowerImages = [
            'images/Project-Thumbnails/Murakami-Flowers-Thumbnail.png',
            'images/Project-Thumbnails/pet-simulator-thumbnail.png',
            'images/Project-Thumbnails/a-light-from-phipps-thumbnail.PNG',
            'images/Project-Thumbnails/futura-poster-thumbnail.png',
            'images/Project-Thumbnails/squares-&-ampersands-thumbnail.png',
            'images/Project-Thumbnails/business-card-thumbnail.jpg'
        ];

        const flowerLinks = [
            'https://melodymchu.github.io/project-pages/Murakami-Flowers.html',
            'https://melodymchu.github.io/project-pages/Pet-Simulator.html',
            'https://melodymchu.github.io/project-pages/A-Light-From-Phipps.html',
            'https://melodymchu.github.io/project-pages/Futura-Poster.html',
            'https://melodymchu.github.io/project-pages/Squares-&-Ampersands.html',
            'https://melodymchu.github.io/project-pages/business-card.html'
        ];

        const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

        const getRandomBaseColor = () => ({
            hue: getRandomInt(0, 360),
            saturation: getRandomInt(30, 80),
            lightness: getRandomInt(80, 90)
        });

        const createFlower = (imageSrc, linkHref) => {
            const flowerLink = document.createElement('a');
            flowerLink.href = linkHref;
            flowerLink.classList.add('flower-link');

            const flower = document.createElement('div');
            flower.classList.add('flower');

            const baseColor = getRandomBaseColor();
            const numberOfPetals = getRandomInt(5, 10);
            const baseWidth = 120 - numberOfPetals * 2;
            const baseHeight = 70 - numberOfPetals * 2;

            const baseBorderRadius = Array(4).fill().map(() => getRandomInt(40, 60));

            const stem = document.createElement('div');
            stem.classList.add('stem');
            stem.style.height = `${getRandomInt(180, 400)}px`;
            flower.appendChild(stem);

            for (let i = 1; i <= 2; i++) {
                const leaf = document.createElement('div');
                leaf.classList.add('leaf', `leaf${i}`);
                leaf.style.top = `${getRandomInt(140, 200)}px`;
                leaf.style.left = `${i === 1 ? -40 : 4}px`;
                leaf.style.transform = `rotate(${i === 1 ? 30 : -30}deg)`;
                flower.appendChild(leaf);
            }

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

                flower.appendChild(petal);
            }

            const center = document.createElement('div');
            center.classList.add('center');
            const image = document.createElement('img');
            image.src = imageSrc;
            image.alt = 'Flower Image';
            center.appendChild(image);

            flower.appendChild(center);
            flowerLink.appendChild(flower);

            return flowerLink;
        };

        flowerImages.forEach((imageSrc, i) => {
            flowerRow.appendChild(createFlower(imageSrc, flowerLinks[i]));
        });
    };
});
