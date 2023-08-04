// If input is invalid, add show class to warning

const inputFields = document.querySelectorAll("input")

const firstNameInput = document.getElementById("first-name")
const lastNameInput = document.getElementById("last-name")
const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")

const warnings = document.querySelectorAll(".warning")
const warningIcons = document.querySelectorAll(".fa-solid")

const submitBtn = document.getElementById("claim-btn")

function check() {
    if(!firstNameInput.checkValidity()) {
        warnings[0].classList.add("show")
        warningIcons[0].classList.add("show")
    } else {
        warnings[0].classList.remove("show")
        warningIcons[0].classList.remove("show")
    }
    if(!lastNameInput.checkValidity()) {
        warnings[1].classList.add("show")
        warningIcons[1].classList.add("show")
    } else {
        warnings[1].classList.remove("show")
        warningIcons[1].classList.remove("show")
    }
    if(!emailInput.checkValidity()) {
        warnings[2].classList.add("show")
        warningIcons[2].classList.add("show")
    } else {
        warnings[2].classList.remove("show")
        warningIcons[2].classList.remove("show")
    }
    if(!passwordInput.checkValidity()) {
        warnings[3].classList.add("show")
        warningIcons[3].classList.add("show")
    } else {
        warnings[3].classList.remove("show")
        warningIcons[3].classList.remove("show")
    }
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    check()
})


