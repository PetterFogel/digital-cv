window.addEventListener("load", main);

/** Will start program when browser refresh. */
function main()  {
    burgerMenuNav();
    window.addEventListener("scroll", scrollFunctions);
}

/** Will start functions with scroll functionality. */
function scrollFunctions() {
    onScrollDivAppear();
    navTransparentToColor();
}

/** Will toggle slide navigation links in and out from browser. */
function burgerMenuNav() {
    /** @type {HTMLDivElement} */
    const burgerIcon = document.querySelector(".burger-menu");
    /** @type {HTMLUListElement} */
    const navLinks = document.querySelector(".nav-links");
    
    burgerIcon.addEventListener("click", function() {
        navLinks.classList.toggle("burger-active");
        burgerIcon.classList.toggle("rotate");
    });
}

/** Will make a div, containing text and buttons appear when scrolling. */
function onScrollDivAppear() {
    /** @type {HTMLDivElement} */
    const aboutInfoText = document.querySelector(".about-info");
    const introPosition = aboutInfoText.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 2;

    if (introPosition < screenPosition) {
        aboutInfoText.classList.add("info-appear");
    }
}

/** The transparent navigation bar will get color when scrolling. */
function navTransparentToColor() {
    /** @type {HTMLDivElement} */
    const navBar = document.querySelector("nav");
    var top = window.scrollY;

    if (top >= 50) {
        navBar.classList.add("nav-active");
    } else {
        navBar.classList.remove("nav-active");
    }
}