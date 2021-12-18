// Stack accordion
const stackTogglers = document.querySelectorAll('.stack-toggler');
stackTogglers.forEach((toggler) => {
  toggler.addEventListener('click', (event) => {
    event.stopPropagation();
    event.preventDefault();

    const activeStack = document.querySelector('.stack-toggler.active');
    if (!activeStack.contains(event.target)) {
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
