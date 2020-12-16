const menuButton = document.querySelector(".header__menu-btn");
const menu = document.querySelector(".header__nav-menu")

menuButton.addEventListener('click', () => {
    menu.classList.toggle("hidden");
})