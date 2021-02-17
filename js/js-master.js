const body = document.body
const navToggler = document.getElementById('navbar-menu-toggler')
const navbarCollapse = document.querySelector('.navbar-collapse')

// Toggle Navigation Menu - Mobile
navToggler.addEventListener('click', (event) => {
  event.stopPropagation()
  menuIsOpen() ? closeMenu() : showMenu()
})

function showMenu(event) {
  navbarCollapse.classList.add('show')
  navToggler.classList.add('close')
  body.classList.add('menu-open')
  window.addEventListener('click', closeMenu)
}

function closeMenu(event) {
  if (event.target !== navbarCollapse){
    navbarCollapse.classList.remove('show')
    navToggler.classList.remove('close')
    body.classList.remove('menu-open')
    window.removeEventListener('click', closeMenu)
  }
}

function menuIsOpen() {
  return navbarCollapse.classList.contains('show')
}

// Hide call to scroll on scrool
window.addEventListener('scroll', () => {
  let scrollCall = document.getElementById('call-to-scroll')

  window.scrollY > 100
    ? scrollCall.style.visibility = 'hidden'
    : scrollCall.style.visibility = 'visible'
})

// EXPERIMENT
const stack = [
  'Fullstack',
  'Freelance',
  'Python / Django',
  'Ruby / Rails',
  'JS / React',
  'Bootstrap',
  'HTML',
  'CSS(SASS)',
  ' '.repeat(15)
]
const experiment = document.getElementById('experiment')
let stackCounter = 0
let textCounter = 0
let featuredStack = ''

function callStack() {
  featuredStack = stack[stackCounter]
  let span = document.createElement('span')

  span.style.color = '#fff'
  span.append(featuredStack[textCounter])
  experiment.appendChild(span)
  textCounter++

  setTimeout(() => {span.style.opacity = 0.16}, 150)

  if (textCounter >= featuredStack.length) {
    textCounter = 0
    experiment.appendChild(document.createElement('br'))
    if (stackCounter < stack.length - 1) {
      stackCounter++
    }else {
      stackCounter = 0
      experiment.innerHTML = ''
    }
  }
}
setInterval(callStack, 100)


// Stack accordion
const stackTogglers = document.querySelectorAll('.stack-toggler')

stackTogglers.forEach((toggler) => {
  toggler.addEventListener('click', (event) => {
    event.stopPropagation()
    event.preventDefault()

    const activeStack = document.querySelector('.stack-toggler.active')
    if (activeStack.contains(event.target)) {
      return
    }else {
      activeStack.classList.remove('active')
      activeStack.nextElementSibling.classList.remove('show')

      if (event.target.nextElementSibling) {
        event.target.classList.add('active')
        event.target.nextElementSibling.classList.add('show')
      }else {
        event.target.parentElement.classList.add('active')
        event.target.parentElement.nextElementSibling.classList.add('show')
      }
    }
  })
})


// Project images slider
const slideControls = document.querySelectorAll('.slide-control')
const pImages = document.querySelectorAll('.p-image')

slideControls.forEach((control) => {
  control.addEventListener('click', (event) => {
    event.preventDefault(), event.stopPropagation()

    if (pImages.length < 2){ return }
    // activeImage.classList.remove('active')
    event.target.classList.contains('next')
      ? showNext()
      : showPrev()
  })
})


function showNext() {
  const activeImage = document.querySelector('.p-image.active')

  if (activeImage.nextElementSibling.classList.contains('p-image')){
    activeImage.classList.remove('active')
    activeImage.nextElementSibling.classList.add('active')
  }else {
    activeImage.classList.remove('active')
    pImages[0].classList.add('active')
  }
}

function showPrev() {
  const activeImage = document.querySelector('.p-image.active')

  if (activeImage.previousElementSibling){
    activeImage.classList.remove('active')
    activeImage.previousElementSibling.classList.add('active')
  }else {
    activeImage.classList.remove('active')
    pImages[pImages.length - 1].classList.add('active')
  }
}
