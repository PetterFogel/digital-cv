window.addEventListener("load", main);
window.addEventListener("scroll", scrollFunctions);

function main()  {
    burgerIconNav();
}

function scrollFunctions() {
    infoScrollAppear();
}

function burgerIconNav() {
    // Fetch classes from HTML.
    const burgerIcon = document.querySelector(".burger-menu");
    const navBar = document.querySelector(".nav-links");
    // Click burger-icon to start function.
    burgerIcon.addEventListener("click", function() {
        // Nav links shows.
        navBar.classList.toggle("nav-active");
        // Burger bars rotate.
        burgerIcon.classList.toggle("rotate");
    });
}

function infoScrollAppear() {
    const aboutText = document.querySelector(".about-info");
    const introPosition = aboutText.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.8;

    if (introPosition < screenPosition) {
        aboutText.classList.add("info-appear");
    }
}

// Navigation bar gets color when scroll-effect.
window.onscroll = function() {
// Fetch classes from HTML.
const nav = document.querySelector("nav");
const logo = document.querySelector(".logo");
const allNavLinks = document.querySelectorAll(".nav-links li a");
    var top = window.scrollY;
    if (top >= 50) {
        nav.classList.add("header-active");
        logo.classList.add("color-active");
        // Loops through all links.
        for (const link of allNavLinks) {
            link.classList.add("color-active");
        }
    } else {
        nav.classList.remove("header-active");
        logo.classList.remove("color-active");
        // Loops through all links.
        for (const link of allNavLinks) {
            link.classList.remove("color-active");
        }
    }
}

// // SMOOTH SCROLL FUNCTIONALITY
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//       e.preventDefault();
//       document.querySelector(this.getAttribute('href')).scrollIntoView({
//         behavior: 'smooth'
//       });
//     });
//   });

