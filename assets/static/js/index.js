/* Print name */
const nameTag = document.getElementById("intro-name");
const name = "Silas Kalu";
let count = 0;

name.split("").forEach((letter) => {
  setTimeout(() => {
    nameTag.innerHTML += letter;
  }, (count += 200));
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
