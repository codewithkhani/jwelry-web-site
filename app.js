// const menuBtn = document.getElementById("menu-btn");
// const navlinks = document.getElementById("nav-links");
// const menuBtnIcon = menuBtn.querySelector("i");

// menuBtn.addEventListener("click", (e) => {
//     navlinks.classList.toggle("open");
//     const isOpen = navlinks.classList.contains("open");
//     menuBtn.setAttribute(
//         "class", 
//         isOpen ? "ri-close-line" : "ri-menu-line");
// });

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    if (navLinks.classList.contains("open")) {
        menuBtnIcon.classList.remove("fa-bars");
        menuBtnIcon.classList.add("fa-xmark");
    } else {
        menuBtnIcon.classList.remove("fa-xmark");
        menuBtnIcon.classList.add("fa-bars");
    }
});

const navSearch = document.getElementById("nav-search");
navSearch.addEventListener("click", () => {
    navSearch.classList.toggle("open");
});
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".header__content div", {
    duration: 1000,
    delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".deals__card", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".about__image img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".about__card", {
    duration: 1000,
    interval: 500,
    delay: 500,
});

