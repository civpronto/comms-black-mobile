async function includeHTML(id, file) {
  const element = document.getElementById(id);
  if (element) {
    const response = await fetch(file);
    if (response.ok) {
      element.innerHTML = await response.text();
    }
  }
}

// Load header & footer
window.addEventListener("DOMContentLoaded", () => {
  includeHTML("header-placeholder", "header.html").then(() => {
    // Re-attach hamburger script
    window.toggleMenu = function() {
      const nav = document.getElementById("mobileNav");
      nav.style.display = nav.style.display === "flex" ? "none" : "flex";
    };
  });
  includeHTML("footer-placeholder", "footer.html");
});
