document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById("backToTop");

    if (backToTopButton) {
        backToTopButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

        window.onscroll = function () {
            backToTopButton.style.display = window.scrollY > 100 ? "block" : "none";
        };
    }

    const flowerRow = document.getElementById('flowerRow');

    const flowerImages = [
        'images/33c3ed0d0a6b9f660a76fef9a287c890.png',
        'images/Project-Thumbnails/pet-simulator-thumbnail.png',
        'images/simple-black-flower-outline.png'
    ];

    const flowerLinks = [
        'https://melodymchu.github.io/Murakami-Flowers.html',
        'https://melodymchu.github.io/Pet-Simulator.html',
        'https://melodymchu.github.io/Promotional-Robot.html'
    ];

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomBaseColor() {
        return {
            hue: getRandomInt(0, 360),
            saturation: getRandomInt(30, 80),
            lightness: getRandomInt(80, 90)
        };
    }

    function createFlower(imageSrc, linkHref) {
        const flowerLink = document.createElement('a');
        flowerLink.href = linkHref;
        flowerLink.classList.add('flower-link');

        const flower = document.createElement('div');
        flower.classList.add('flower');

        const baseColor = getRandomBaseColor();
        const numberOfPetals = getRandomInt(5, 10);
        const baseWidth = 120 - numberOfPetals * 2;
        const baseHeight = 60 - numberOfPetals * 2;
        const baseBorderRadius = Array.from({ length: 4 }, () => getRandomInt(40, 60));

        const stem = document.createElement('div');
        stem.classList.add('stem');
        flower.appendChild(stem);

        for (let i = 1; i <= 2; i++) {
            const leaf = document.createElement('div');
            leaf.classList.add('leaf', `leaf${i}`);
            const leafTop = getRandomInt(140, 200);
            leaf.style.top = `${leafTop}px`;
            leaf.style.left = i === 1 ? '-20px' : '20px';
            leaf.style.transform = `rotate(${i === 1 ? 30 : -30}deg)`;
            flower.appendChild(leaf);
        }

        for (let i = 0; i < numberOfPetals; i++) {
            const petal = document.createElement('div');
            petal.classList.add('petal');
            const hueVariation = getRandomInt(-15, 15);
            const lightnessVariation = getRandomInt(-5, 5);
            const petalHue = (baseColor.hue + hueVariation + 360) % 360;
            const petalLightness = Math.max(0, Math.min(100, baseColor.lightness + lightnessVariation));
            petal.style.backgroundColor = `hsl(${petalHue}, ${baseColor.saturation}%, ${petalLightness}%)`;
            petal.style.width = `${baseWidth + getRandomInt(0, 4)}px`;
            petal.style.height = `${baseHeight + getRandomInt(0, 4)}px`;
            petal.style.borderRadius = baseBorderRadius.map(val => val + getRandomInt(0, 2)).join('% ') + '%';
            const angle = (360 / numberOfPetals) * i;
            petal.style.position = 'absolute';
            petal.style.top = '80px';
            petal.style.transform = `rotate(${angle}deg) translate(40px)`;
            flower.appendChild(petal);
        }

        const center = document.createElement('div');
        center.classList.add('center');
        flower.appendChild(center);

        const image = document.createElement('img');
        image.src = imageSrc;
        image.alt = 'Flower Image';
        center.appendChild(image);

        flowerLink.appendChild(flower);
        return flowerLink;
    }

    flowerImages.forEach((img, index) => flowerRow.appendChild(createFlower(img, flowerLinks[index])));
});
