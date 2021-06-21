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
