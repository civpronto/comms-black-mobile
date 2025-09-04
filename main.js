// main.js
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileNav = document.getElementById("mobileNav");

  if (menuToggle && mobileNav) {
    // Toggle menu on hamburger click
    menuToggle.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
    });

    // Close menu after clicking a link
    mobileNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
      });
    });
  }
});
