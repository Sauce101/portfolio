// const hamburgerButton = document.getElementById('hamburger');
// const navlist = document.getElementById('nav-list');

// function toggleButton() {
//     navlist.classList.toggle('show');
// }

// toggleButton = () => navlist.classList.toggle('show');

// hamburgerButton.addEventListener('click', toggleButton);


// ham
// $(document).ready(function(){
//   $('#nav-icon1').click(function(){
//     $(this).toggleClass('open');
//   });
// });

// this works as just the burger
// const hamburgerButton = document.getElementById('nav-icon1');

// toggleButton = () => hamburgerButton.classList.toggle('open');

// hamburgerButton.addEventListener('click', toggleButton);

// try
const hamburgerButton = document.getElementById('nav-icon1');
const navlist = document.getElementById('nav-list');

toggleButton = () => {
  hamburgerButton.classList.toggle('open')
  navlist.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton);

