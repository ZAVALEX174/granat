const openBurgerBtn = document.querySelector('.header__burger_open');
const closeBurgerBtn = document.querySelector('.btn__burger-close');
const burgerModal = document.querySelector('.burger-menu');

openBurgerBtn.addEventListener('click', () => {
    burgerModal.style.left = '0';
});

closeBurgerBtn.addEventListener('click', () => {
    burgerModal.style.left = '-100%';
})