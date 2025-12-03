function toggleMenu() {
    const menu = document.getElementById("mobile-menu");
    const icon = document.querySelector(".hamburger-icon-small");
    if (menu) {
        menu.classList.toggle("open");
    }
    if (icon) {
        icon.classList.toggle("open");
    }
}