// assets/js/main.js

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");

  // Toggle menu on hamburger click
  toggle.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
  });

  // Optional: close menu when a link is clicked
  const links = mobileNav.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active");
    });
  });
});
