const stack = [
  'Fullstack',
  'Freelance',
  'Python / Django',
  'Ruby / Rails',
  'JS / React',
  'Bootstrap',
  'HTML',
  'CSS(SASS)',
];
const body = document.body;
const navToggler = document.getElementById('navbar-menu-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

// Toggle Navigation Menu - Mobile
navToggler.addEventListener('click', (event) => {
  event.stopPropagation();
  menuIsOpen() ? closeMenu(event) : showMenu(event);
});

function showMenu(event) {
  navbarCollapse.classList.add('show');
  navToggler.classList.add('close');
  body.classList.add('menu-open');
  window.addEventListener('click', closeMenu);
}

function closeMenu(event) {
  if (event.target !== navbarCollapse) {
    navbarCollapse.classList.remove('show');
    navToggler.classList.remove('close');
    body.classList.remove('menu-open');
    window.removeEventListener('click', closeMenu);
  }
}

function menuIsOpen() {
  return navbarCollapse.classList.contains('show');
}

// Hide call to scroll on scrool
window.addEventListener('scroll', () => {
  let scrollCall = document.getElementById('call-to-scroll');

  window.scrollY > 100
    ? (scrollCall.style.visibility = 'hidden')
    : (scrollCall.style.visibility = 'visible');
});

// Add background objects
const landingPage = document.getElementById('landing');
for (let i = 1; i < 20; i++) {
  const object = document.createElement('div');

  object.classList.add(`bg-drop-${i}`);
  landingPage.appendChild(object);
}

// Engrave stack
const stackEngraving = document.getElementById('stack-engraving');
let stackIndex = 0;
let textIndex = 0;
let featuredStack = '';

function engraveStack() {
  let span = document.createElement('span');

  featuredStack = stack[stackIndex];
  span.style.color = '#fff';
  span.append(featuredStack[textIndex]);
  span.onmouseenter = (event) => console.log(event);

  stackEngraving.appendChild(span);
  textIndex++;

  setTimeout(() => (span.style.opacity = 0.16), 100);

  if (textIndex >= featuredStack.length) {
    textIndex = 0;
    stackEngraving.appendChild(document.createElement('br'));

    if (stackIndex < stack.length - 1) {
      stackIndex++;
    } else {
      stackIndex = 0;
      stackEngraving.innerHTML = '';
    }
  }
}
setInterval(engraveStack, 100);

// Hide call to scroll button on scroll
window.addEventListener('scroll', () => {
  let scrollCall = document.getElementById('call-to-scroll');

  window.scrollY > 100
    ? (scrollCall.style.visibility = 'hidden')
    : (scrollCall.style.visibility = 'visible');
});

// Stack accordion
const stackTogglers = document.querySelectorAll('.stack-toggler');
stackTogglers.forEach((toggler) => {
  toggler.addEventListener('click', (event) => {
    event.stopPropagation();
    event.preventDefault();

    const activeStack = document.querySelector('.stack-toggler.active');
    if (activeStack.contains(event.target)) {
      return;
    } else {
      activeStack.classList.remove('active');
      activeStack.nextElementSibling.classList.remove('show');

      if (event.target.nextElementSibling) {
        event.target.classList.add('active');
        event.target.nextElementSibling.classList.add('show');
      } else {
        event.target.parentElement.classList.add('active');
        event.target.parentElement.nextElementSibling.classList.add('show');
      }
    }
  });
});

// Carousel ride
function getCarouselItems(el) {
  const items = Array.from(el.querySelectorAll('.carousel-inner .carousel-item'));
  const activeItem = items.find((i) => i.classList.contains('active'));
  const nextItem = activeItem.nextElementSibling;
  const prevItem = activeItem.previousElementSibling;

  return { items, activeItem, nextItem, prevItem };
}

const carouselControls = document.querySelectorAll('[data-slide-target]');
carouselControls.forEach((control) => {
  control.onclick = (e) => {
    e.preventDefault();

    const carouselID = e.currentTarget.getAttribute('data-slide-target');
    const carousel = document.querySelector(carouselID);
    const { items, activeItem, nextItem, prevItem } = getCarouselItems(carousel);
    const slideControl = e.currentTarget.getAttribute('data-slide-ctrl');

    if (items.length < 2) return; // return if only 1 .carosuel-item exists

    activeItem.classList.remove('active');
    switch (slideControl) {
      case 'next':
        if (nextItem) nextItem.classList.add('active');
        else items[0].classList.add('active');
        break;
      case 'prev':
        if (prevItem) prevItem.classList.add('active');
        else items[items.length - 1].classList.add('active');
        break;
    }
  };
});
