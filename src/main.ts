import toggleMenu from './components/navbar';

const burgerButtonEl = document.querySelector('.burger--menu-button');
if (burgerButtonEl) {
  burgerButtonEl.addEventListener('click', toggleMenu);
}
