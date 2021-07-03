// Engrave stack
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
