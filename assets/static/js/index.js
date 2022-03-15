/* PRINT NAME */
const nameTag = document.getElementById("intro-name");
const name = "Silas Kalu";
let nameTimer = 0;

name.split("").forEach((letter) => {
  setTimeout(() => {
    nameTag.innerHTML += letter;
  }, (nameTimer += 200));
});

// PRINT SHORT INTRO
const introText = `I'm a software developer with high-end proficiency in modern web technologies. I help businesses mould concepts into functional computer software. Let's connect 👋.`;
const introTag = document.getElementById("intro");
let introTimer = 0;

// set minimun height of element to it's original height with content,
// remove initial content and re-fill with content
introTag.style.minHeight = introTag.offsetHeight + "px";
introTag.innerHTML = "";
introText.split("").forEach((letter) => {
  setTimeout(() => (introTag.innerHTML += letter), (introTimer += 10));
});

// Call to scroll
let scrollButton = document.getElementById("call-to-scroll");

if (window.scrollY < 100) {
  scrollButton.classList.remove("visually-hidden");
}

function handleScroll() {
  if (window.scrollY > 100) {
    scrollButton.classList.remove("visibile");
    scrollButton.classList.add("visually-hidden");
  } else {
    scrollButton.classList.add("visibile");
    scrollButton.classList.remove("visually-hidden");
  }
}

window.addEventListener("scroll", handleScroll);
