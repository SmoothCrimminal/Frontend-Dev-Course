const arrow = document.querySelector('.arrow');
const nav = document.querySelector('nav');

arrow.addEventListener('click', () => {
    arrow.classList.toggle('on');
    nav.classList.toggle('on');
})