hamburger = document.querySelector(".hamburger");

nav = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("show-menu");
});
