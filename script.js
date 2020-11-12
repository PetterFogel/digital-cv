/** Will start the main function when browser refresh. */
window.addEventListener("load", main);
/** Will start the scrollunctions when scrolling in browser. */
window.addEventListener("scroll", scrollFunctions);

/** Will initiate functions within. */
function main()  {
    burgerMenuNav();
}

/** Will initiate  functions within. */
function scrollFunctions() {
    onScrollDivAppear();
    fromTransparentToColor();
}

/** Will make navigation links slide in into browser. */
function burgerMenuNav() {
    /** @type {HTMLDivElement} Contains 3 divs with layout of a burger menu. */
    const burgerIcon = document.querySelector(".burger-menu");
    /** @type {HTMLUListElement} */
    const navLinks = document.querySelector(".nav-links");
    /** Click burger-icon to start function. */ 
    burgerIcon.addEventListener("click", function() {
        navLinks.classList.toggle("burger-active");
        burgerIcon.classList.toggle("rotate");
    });
}

/** Will make a div, that contains text and buttons appear when scroll. */
function onScrollDivAppear() {
    /** @type {HTMLDivElement} Div that contains paragraphs and buttons. */
    const aboutInfoText = document.querySelector(".about-info");
    const introPosition = aboutInfoText.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 2;

    if (introPosition < screenPosition) {
        aboutInfoText.classList.add("info-appear");
    }
}

/** Navigation bar will get color when scroll. */
function fromTransparentToColor() {
    /** @type {HTMLDivElement} Navigation bar. */
    const navBar = document.querySelector("nav");
    var top = window.scrollY;

    if (top >= 50) {
        navBar.classList.add("nav-active");
    } else {
        navBar.classList.remove("nav-active");
    }
}