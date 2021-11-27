
const hamburgerButton = document.getElementById('hamburger');
const navlist = document.getElementById('nav-list');

toggleButton = () => {
  hamburgerButton.classList.toggle('open')
  navlist.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton);
