const
    e = document.querySelector(".primary-navigation-menu"),
    n = document.querySelectorAll(".menu-item"),
    o = document.querySelector(".primary-navigation-hamburgerbtn"),
    t = document.querySelector(".close-navigation-icon"),
    c = document.querySelector(".open-navigation-icon");

function i() {
    e.classList.contains("showMenu") ?
        (e.classList.remove("showMenu"),
            t.style.display = "none",
            c.style.display = "block") :
        (e.classList.add("showMenu"),
            t.style.display = "block",
            c.style.display = "none");
}

o.addEventListener("click", i),

    n.forEach((function (e) {
        e.addEventListener("click", i);
    }));