const navList = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll(".nav-link");
const burger = document.querySelector(".burger");
const body = document.querySelector("body");
burger.addEventListener("click", toggleMenu);

function toggleMenu() {
  body.classList.toggle("block-scroll");
  navList.classList.toggle("open");
  navLinks.forEach((link, index) => {
    link.style.transition = `transform ${index * 0.3 + 0.3}s ease-out`;
    link.classList.toggle("show");
  });
}

navLinks.forEach(link => link.addEventListener("click", toggleMenu));
