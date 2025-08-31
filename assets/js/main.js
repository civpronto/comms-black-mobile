// main.js — Comms Black Mobile
// Lightweight, privacy-friendly, security-conscious

(function () {
  "use strict";

  // Auto-fill current year in footer
  const yearSpan = document.querySelector("[data-year]");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Future: add simple accessibility or UI features here
})();
