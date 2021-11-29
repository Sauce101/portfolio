// hamburger animate
const hamburgerButton = document.getElementById("hamburger");
const navlist = document.getElementById("nav-list");

toggleButton = () => {
  hamburgerButton.classList.toggle("open");
  navlist.classList.toggle("show");
};

hamburgerButton.addEventListener("click", toggleButton);

// smooth-scroll
const scroll = new SmoothScroll('#nav-list a[href*="#"]', {
  speed: 800,
});
