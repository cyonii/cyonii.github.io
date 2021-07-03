// Hide call to scroll on scrool
window.addEventListener('scroll', () => {
  let scrollCall = document.getElementById('call-to-scroll');

  window.scrollY > 100
    ? (scrollCall.style.visibility = 'hidden')
    : (scrollCall.style.visibility = 'visible');
});

// Hide call to scroll button on scroll
window.addEventListener('scroll', () => {
  let scrollCall = document.getElementById('call-to-scroll');

  window.scrollY > 100
    ? (scrollCall.style.visibility = 'hidden')
    : (scrollCall.style.visibility = 'visible');
});
