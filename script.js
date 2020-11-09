/** Will start functions when browser refresh. */
window.addEventListener("load", main);
/** Will start functions when scrolling. */
window.addEventListener("scroll", scrollFunctions);

function main()  {
    burgerIconNav();
}

/** Will start functions within. */
function scrollFunctions() {
    infoScrollAppear();
    navTransparentToColor();
}

/** Will make navigation links slide in into browser. */
function burgerIconNav() {
    /** @type {HTMLDivElement} Contains 3 divs with layout of burger menu. */
    const burgerIcon = document.querySelector(".burger-menu");
    /** @type {HTMLUListElement} */
    const navLinks = document.querySelector(".nav-links");
    /** Click burger-icon to start function. */ 
    burgerIcon.addEventListener("click", function() {
        navLinks.classList.toggle("links-active");
        burgerIcon.classList.toggle("rotate");
    });
}

/** Will make a div, that contains text and buttons appear when scroll. */
function infoScrollAppear() {
    /** @type {HTMLDivElement} Div that contains paragraphs and buttons. */
    const aboutText = document.querySelector(".about-info");
    const introPosition = aboutText.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.8;

    if (introPosition < screenPosition) {
        aboutText.classList.add("info-appear");
    }
}


/** Navigation bar will get color when scroll. */
function navTransparentToColor() {
    /** @type {HTMLDivElement} Navigation bar. */
    const navBar = document.querySelector("nav");
    var top = window.scrollY;

    if (top >= 50) {
        navBar.classList.add("nav-active");
    } else {
        navBar.classList.remove("nav-active");
    }
}