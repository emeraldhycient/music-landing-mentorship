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



// login page functionality
// signin -> login
// signup -> register

const loginform = document.getElementById("loginform");

const username = document.getElementById("username")

const password = document.getElementById("password")

const loader = document.getElementById("loader")

const submitbtn = document.getElementById("submitbtn")

// password with minmun strength
const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

// password with maximun strength
const strongRegex = new RegExp("^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*])(?=.{8,})");

loginform.addEventListener("submit", function (event) {
    // prevents the browser from submiting
    event.preventDefault();

    const passwordvalue = password.value;
    const usernamevalue = username.value

    // if (mediumRegex.test(passwordvalue)) {
    if (passwordvalue !== "" && passwordvalue !== null && passwordvalue !== undefined) {
        password.style.borderColor = "green"
        if (usernamevalue !== "" && usernamevalue !== null && usernamevalue !== undefined) {
            username.style.borderColor = "green"


            toggleElemet(loader, "block")
            toggleElemet(submitbtn, "")

            fetch('https://dummyjson.com/auth/login', {
                //methods -> POST,GET,PUT,PATCH,DELETE
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: usernamevalue,
                    password: passwordvalue,
                    // expiresInMins: 60, // optional
                })
            })
                .then(res => res.json())
                .then((data) => {
                    if (data?.token) {
                        sessionStorage.setItem("usersDetail", JSON.stringify(data))
                        window.location.href = "/src/pages/dashboard.html"
                    } else {
                        alert("invalid login details")
                    }
                    // window.location.reload();
                })
                .catch((reason) => {
                    console.log(reason)
                })

            setTimeout(() => {
                toggleElemet(submitbtn, "block")
                toggleElemet(loader, "")
            }, 1000)



        } else {
            username.style.borderColor = "red"
        }
    } else {
        password.style.borderColor = "red"
    }
})



const toggleElemet = (element, display) => {
    if (element.style.display !== "none") {
        element.style.display = "none"
    } else {
        element.style.display = display;
    }
}




const profileSection = document.querySelector("#profileSection")

profileSection.innerHTML = "<h1>hello patience</h1>"

console.log("profileSection", profileSection)




















