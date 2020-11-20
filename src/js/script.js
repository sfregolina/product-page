const burgerMenu = document.querySelector('.burger-menu');
const burgerButton = document.querySelector('.nav__mobile-button');
const closeButton = document.querySelector('.burger-menu__head button');

burgerButton.addEventListener('click', () => {
  burgerMenu.classList.add('active');
})

closeButton.addEventListener('click', () => {
  burgerMenu.classList.remove('active');
})