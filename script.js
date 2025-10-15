
const revealElements = document.querySelectorAll(".card, .about, .gallery img");

window.addEventListener("scroll", () => {
  for (let el of revealElements) {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
      el.classList.add("visible");
    }
  }
});


document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Gracias por contactarnos. Te responderemos pronto 😊");
  this.reset();
});
