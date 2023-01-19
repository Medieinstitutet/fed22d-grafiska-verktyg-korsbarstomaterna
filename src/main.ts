// eslint-disable-next-line prettier/prettier
import { gsap } from 'gsap';
import toggleMenu from './components/navbar';

const burgerButtonEl = document.querySelector('.burger-menu-button');
if (burgerButtonEl) {
  burgerButtonEl.addEventListener('click', toggleMenu);
}

const pizzaBox = document.querySelector('.pizza-box');
const cookieBtnAccept = document.querySelector('#cookiesAccept');
const cookieBtnDecline = document.querySelector('#cookiesDecline');
const emailInput = document.querySelector('#emailInput') as HTMLInputElement;
const emailSubmit = document.querySelector('#emailSubmit') as HTMLButtonElement;

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

const createPizzaHover = () => {
  const screenWidth = window.innerWidth;

  // Check if browser is desktop size (1024px width)
  if (screenWidth >= 1024) {
    const pizzaCardEls = document.querySelectorAll('.card');

    if (pizzaCardEls) {
      for (const item of pizzaCardEls) {
        const card = item as HTMLDivElement;

        card.addEventListener('mousemove', (e) => {
          const cardWidth = card.offsetWidth;
          const cardHeight = card.offsetHeight;
          const centerX = card.offsetLeft + cardWidth / 2;
          const centerY = card.offsetTop + cardHeight / 2;
          const mouseX = e.clientX - centerX;
          const mouseY = e.clientY - centerY;

          const rotateX = ((+1 * 4 * mouseY) / (cardHeight / 2) + 10).toFixed(2);
          const rotateY = ((-1 * 4 * mouseX) / (cardWidth / 2)).toFixed(2);

          card.style.transform = `perspective(750px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
      }
    }
  }
};

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

    // Create the hover effect after load
    createPizzaHover();
  }
}

function validateEmail() {
  const email = emailInput.value;
  const emailRegex =
    // eslint-disable-next-line
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailRegex.test(email)) {
    emailSubmit.disabled = false;
  } else {
    emailSubmit.disabled = true;
  }
}

cookieBtnAccept?.addEventListener('click', closeCookiePopup);
cookieBtnDecline?.addEventListener('click', closeCookiePopup);
emailInput?.addEventListener('keyup', validateEmail);
renderPizzas();

/* GSAP animation */
const navbar = document.querySelector('.nav-container-onload');
gsap.to(navbar, { y: 170, delay: 1 });
