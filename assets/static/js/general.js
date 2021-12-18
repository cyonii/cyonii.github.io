// Hide call to scroll on scrool
window.addEventListener('scroll', () => {
  const scrollCall = document.getElementById('call-to-scroll');

  if (window.scrollY > 100) {
    scrollCall.style.visibility = 'hidden';
  } else {
    scrollCall.style.visibility = 'visible';
  }
});

// Hide call to scroll button on scroll
window.addEventListener('scroll', () => {
  const scrollCall = document.getElementById('call-to-scroll');

  if (window.scrollY > 100) {
    scrollCall.style.visibility = 'hidden';
  } else {
    scrollCall.style.visibility = 'visible';
  }
});
