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