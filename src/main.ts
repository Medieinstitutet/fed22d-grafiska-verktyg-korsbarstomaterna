import toggleMenu from './components/navbar';

const burgerButtonEl = document.querySelector('.burger-menu-button');
if (burgerButtonEl) {
  burgerButtonEl.addEventListener('click', toggleMenu);
}

const pizzaBox = document.querySelector('.pizza-box');
const cookieBtnAccept = document.querySelector('.cookie-btn-accept');
const cookieBtnDecline = document.querySelector('.cookie-btn-decline');

const pizzas = [
  {
    id: 1,
    name: 'Classic',
  },
  {
    id: 2,
    name: 'Vegan',
  },
  {
    id: 3,
    name: 'Meat',
  },
];

function closeCookiePopup() {
  const cookieBox = document.querySelector('.cookies') as HTMLDivElement;
  cookieBox.style.display = 'none';
}

function renderPizzas() {
  let pizzaHTML = '';
  pizzas.forEach((pizza) => {
    pizzaHTML += `
      <div class="card">
        <img src="webformat/cardPizza.jpg" alt="${pizza.name} pizza" />
        <h2>${pizza.name}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur elit, sed ut aliqua.</p>
        <button>Menu</button>
      </div>`;
  });

  if (pizzaBox) {
    pizzaBox.innerHTML = pizzaHTML;
  }
}

cookieBtnAccept?.addEventListener('click', closeCookiePopup);
cookieBtnDecline?.addEventListener('click', closeCookiePopup);
renderPizzas();
