// Shared light/dark theme handling for all pages.
(function () {
  "use strict";
  const KEY = "caaspp_theme";

  function getPreferred() {
    const saved = localStorage.getItem(KEY);
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function apply(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const btn = document.getElementById("theme-toggle");
    if (btn) btn.textContent = theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
  }

  let current = getPreferred();
  apply(current);

  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("theme-toggle");
    if (btn) {
      apply(current);
      btn.addEventListener("click", () => {
        current = current === "dark" ? "light" : "dark";
        localStorage.setItem(KEY, current);
        apply(current);
      });
    }
  });
})();
