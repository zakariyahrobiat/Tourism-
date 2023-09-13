hamburger = document.querySelector(".hamburger");
close = document.querySelector(".close");
nav = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  nav.classList.add("show-menu");
});
close.addEventListener("click", () => {
  nav.classList.remove("show-menu");
});

// setInterval(person, 1000);
