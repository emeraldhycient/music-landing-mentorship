import './style.css'


const menuToggle = document.querySelector("#menu-toggle")

const menu = document.getElementById("menu")

const toggleMenu = () => {
    if (menu.style.display === "none") {
        menu.style.display = "block"
    } else {
        menu.style.display = "none"
    }




}

menuToggle.addEventListener("click", toggleMenu)


