const toggle = document.getElementById("toggle");
const navLinks = document.querySelector(".navbar-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
})

