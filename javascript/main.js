window.addEventListener("load", main);

/** Will start program when browser refresh. */
function main()  {
    landingPageEffects();
    introSlideShow();
}

function introSlideShow() {
    const screenTop = window.scrollY;
    if (screenTop === 0) {
        fetchPreludeDiv();
        startSlideShow();
    }
}