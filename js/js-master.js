'use strict'

const body = document.body
const navToggler = document.getElementById('navbar-menu-toggler')
const navbarCollapse = document.querySelector('.navbar-collapse')

// Toggle Navigation Menu - Mobile
navToggler.addEventListener('click', (event) => {
  event.stopPropagation()
  navbarCollapse.classList.toggle('show')
  navToggler.classList.toggle('close')

  if(navbarCollapse.classList.contains('show')) {
    body.style.overflow = 'hidden'
    body.style.height = '100vh'
  }else {
    body.style.removeProperty('overflow')
    body.style.removeProperty('height')
  }
})

// Hide menu if click happens outside of it - Mobile
window.addEventListener('click', (event, menu=navbarCollapse) => {
  event.stopPropagation()
  if(menu.classList.contains('show')){
    if(!menu.contains(event.target) || event.target.tagName == 'A'){
      menu.classList.remove('show')
    }
  }
})

// Hide call to scroll on scrool
window.addEventListener('scroll', () => {
  let landing = document.getElementById('landing')

  if (window.scrollY > 100){
    landing.classList.add('scrolled')
  }else {
    landing.classList.remove('scrolled')
  }
})

// EXPERIMENT
const stack = [
  'Fullstack',
  'Freelancer',
  'Python / Django',
  'Ruby / Rails',
  'JS / React',
  'Bootstrap',
  'HTML',
  'CSS(SASS)',
  '================='
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
