// Add background objects
const landingPage = document.getElementById('intro');

for (let i = 1; i < 40; i += 1) {
  const object = document.createElement('div');

  object.classList.add(`bg-drop-${i}`);
  landingPage.appendChild(object);
}
