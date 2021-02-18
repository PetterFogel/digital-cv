function startSlideShow() {
        setTimeout(() => {
            startPreludeSlide();
        }, 3000);
        setTimeout(() => {
            startFirstSlide();
        }, 3300);
        setTimeout(() => {
            startSecondSlide();
        }, 3500);
}

function startPreludeSlide() {
    const preludeContainer = document.querySelector(".prelude-container");
    preludeContainer.classList.add("slide-right");
}

function startFirstSlide() {
    const firstSlide = document.querySelector(".first-slide");
    firstSlide.classList.add("slide-up");
}

function startSecondSlide() {
    const secondSlide = document.querySelector(".second-slide");
    secondSlide.classList.add("slide-up");
}