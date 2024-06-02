document.addEventListener("DOMContentLoaded", function () {
    const leftHandle = document.querySelector(".left-handle");
    const rightHandle = document.querySelector(".right-handle");
    const slider = document.querySelector(".slider");


    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft") {
            slide(-1);
        } else if (event.key === "ArrowRight") {
            slide(1);
        }
    });

    leftHandle.addEventListener("click", function () {
        slide(-1);
    });

    rightHandle.addEventListener("click", function () {
        slide(1);
    });

    function slide(direction) {
        const cards = document.querySelectorAll(".card");
        const cardWidth = cards[0].offsetWidth;
        const visibleCards = Math.floor(slider.offsetWidth / cardWidth);

        let currentIndex = parseInt(getComputedStyle(slider).getPropertyValue("--slider-index")) || 0;

        currentIndex = (currentIndex + direction + cards.length) % cards.length;

        slider.style.setProperty("--slider-index", currentIndex);
        slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
});


