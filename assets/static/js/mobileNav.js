// Toggle Navigation Menu - Mobile
const body = document.body;
const navToggler = document.getElementById('navbar-menu-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

function closeMenu(event) {
  if (event.target !== navbarCollapse) {
    navbarCollapse.classList.remove('show');
    navToggler.classList.remove('close');
    body.classList.remove('menu-open');
    window.removeEventListener('click', closeMenu);
  }
}

function showMenu(event) {
  navbarCollapse.classList.add('show');
  navToggler.classList.add('close');
  body.classList.add('menu-open');
  window.addEventListener('click', closeMenu);
}

function menuIsOpen() {
  return navbarCollapse.classList.contains('show');
}

navToggler.addEventListener('click', (event) => {
  event.stopPropagation();
  menuIsOpen() ? closeMenu(event) : showMenu(event);
});
