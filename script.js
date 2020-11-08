window.addEventListener("load", main);

function main()  {
    burgerIconNav();
}

function burgerIconNav() {
    // Fetch classes from HTML.
    const burgerIcon = document.querySelector(".burger-menu");
    const navBar = document.querySelector(".nav-links");
    // Click burger-icon to start function.
    burgerIcon.addEventListener("click", function() {
        // Navigation Appear.
        navBar.classList.toggle("nav-active");
        // Burger bars rotate.
        burgerIcon.classList.toggle("rotate");
    });
}

// Navigation Scroll Effect
const nav = document.querySelector("nav");
const logo = document.querySelector(".logo");
const allNavLinks = document.querySelectorAll(".nav-links li a");
// 
window.onscroll = function() {
    var top = window.scrollY;
    console.log(top);
    if (top >= 50) {
        nav.classList.add("header-active");
        logo.classList.add("color-active");
        for (const link of allNavLinks) {
            link.classList.add("color-active");
        }
    } else {
        nav.classList.remove("header-active");
        logo.classList.remove("color-active");
        for (const link of allNavLinks) {
            link.classList.remove("color-active");
        }
    }
}