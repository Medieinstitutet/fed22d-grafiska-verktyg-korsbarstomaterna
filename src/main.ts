import toggleMenu from './components/navbar';

const burgerButtonEl = document.querySelector('.burger-menu-button');
if (burgerButtonEl) {
  burgerButtonEl.addEventListener('click', toggleMenu);
}

const pizzaBox = document.querySelector('.pizza-box');

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

function renderPizzas() {
  let pizzaHTML = '';
  pizzas.forEach((pizza) => {
    pizzaHTML += `
      <div class="card">
        <img src="public/webformat/cardPizza.jpg" alt="${pizza.name} pizza" />
        <h2>${pizza.name}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur elit, sed ut aliqua.</p>
        <button>Menu</button>
      </div>`;
  });

  if (pizzaBox != null) {
    pizzaBox.innerHTML = pizzaHTML;
  }
}

renderPizzas();
