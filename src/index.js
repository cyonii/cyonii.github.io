import './scss/master.scss';
const stack = require('./js/stack.json');

const landingPage = document.getElementById('landing');
const experiment = document.getElementById('experiment');

// Add background objects
for (let i = 1; i < 20; i++) {
  const object = document.createElement('div');

  object.classList.add(`bg-drop-${i}`);
  landingPage.appendChild(object);
}

// Engrave stack
let stackIndex = 0;
let textIndex = 0;
let featuredStack = '';

function engraveStack() {
  let span = document.createElement('span');

  featuredStack = stack[stackIndex];
  span.style.color = '#fff';
  span.append(featuredStack[textIndex]);
  experiment.appendChild(span);
  textIndex++;

  setTimeout(() => (span.style.opacity = 0.16), 100);

  if (textIndex >= featuredStack.length) {
    textIndex = 0;
    experiment.appendChild(document.createElement('br'));

    if (stackIndex < stack.length - 1) {
      stackIndex++;
    } else {
      stackIndex = 0;
      experiment.innerHTML = '';
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
