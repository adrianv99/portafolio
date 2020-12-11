const menu = document.querySelector('#mobile-menu');
const menuList = document.querySelector('.navbar-menu');
const navLogo = document.querySelector('.navbar-logo');
const body = document.querySelector('body');

//Display mobile menu
menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuList.classList.toggle('active');
    body.classList.toggle('active');
});

// Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from('.animate-hero', {
    duration: 1,
    opacity: 0,
    y: -175,
    stagger: 0.7
});

gsap.from('.animate-about', {
    scrollTrigger: '.animate-about',
    duration: 1,
    opacity: 0,
    x: -175,
    stagger: 0.3,
});

gsap.from('.animate-skills', {
    scrollTrigger: '.animate-skills',
    duration: 1,
    opacity: 0,
    y: 175,
    stagger: 0.15,
});

gsap.from('.animate-project', {
    scrollTrigger: '.animate-project',
    duration: 1,
    opacity: 0,
    x: -175,
    stagger: 0.3,
});

gsap.from('.animate-projects', {
    scrollTrigger: '.animate-projects',
    duration: 1,
    opacity: 0,
    y: 175,
    stagger: 0.5,
    delay: 0.5
});

gsap.from('.animate-picture', {
    scrollTrigger: '.animate-picture',
    duration: 1,
    opacity: 0,
    x: -175,
    stagger: 0.3,
});

gsap.from('.animate-gallery-item', {
    scrollTrigger: '.animate-gallery-item',
    duration: 1.5,
    opacity: 0,
    y: 175,
    stagger: 0.5,
    delay: 0.5
});

gsap.from('.animate-socials', {
    scrollTrigger: '.animate-socials',
    duration: 1,
    opacity: 0,
    x: -175,
    stagger: 0.3,
    delay: 0.3
});