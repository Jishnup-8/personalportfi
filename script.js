const navbar = document.querySelector(".navbar");
const navCollapse = document.querySelector(".navbar-collapse");
const navLinks = document.querySelectorAll(".nav-link");
const contactForm = document.querySelector("#contactForm");
const formAlert = document.querySelector("#formAlert");

function updateNavbarShadow() {
  navbar.classList.toggle("is-scrolled", window.scrollY > 8);
}

window.addEventListener("scroll", updateNavbarShadow);
updateNavbarShadow();

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navCollapse.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
    }
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  event.stopPropagation();

  if (contactForm.checkValidity()) {
    formAlert.classList.remove("d-none");
    contactForm.reset();
    contactForm.classList.remove("was-validated");
    return;
  }

  formAlert.classList.add("d-none");
  contactForm.classList.add("was-validated");
});
