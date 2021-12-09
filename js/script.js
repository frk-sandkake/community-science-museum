

const primaryNavigationMenu = document.querySelector(".primary-navigation-menu");
const menuItems = document.querySelectorAll(".menu-item");
const primNavSubmenu = document.querySelector(".prim-nav-submenu");
const primaryNavigationHamburgerbtn = document.querySelector(".primary-navigation-hamburgerbtn");
const closeNavigationIcon = document.querySelector(".close-navigation-icon");
const openNavigationIcon = document.querySelector(".open-navigation-icon");

function toggleMenu() {
    if (primaryNavigationMenu.classList.contains("showMenu")) {
        primaryNavigationMenu.classList.remove("showMenu");
        closeNavigationIcon.style.display = "none";
        openNavigationIcon.style.display = "block";
    } else {
        primaryNavigationMenu.classList.add("showMenu");
        closeNavigationIcon.style.display = "block";
        openNavigationIcon.style.display = "none";
    }
}

primaryNavigationHamburgerbtn.addEventListener("click", toggleMenu);



menuItems.forEach(
    function (menuItem) {
        menuItem.addEventListener("click", toggleMenu);
        menuItem.addEventListener("hover", toggleMenu);
    }
);