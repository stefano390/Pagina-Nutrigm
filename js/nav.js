/**
 * NutriGm Premium - Navigation
 * Sticky nav with scroll detection and smooth anchor handling
 */
(function () {
  "use strict";

  function initNav() {
    const nav = document.querySelector("[data-nav]");
    if (!nav) return;

    const config = window.__NUTRIGM__?.config;
    const navHeight = config?.navHeight || 80;

    // Scroll detection
    let lastScroll = 0;
    window.addEventListener("scroll", () => {
      const current = window.scrollY;

      // Add scrolled class when past hero
      if (current > 100) {
        nav.classList.add("is-scrolled");
      } else {
        nav.classList.remove("is-scrolled");
      }

      lastScroll = current;
    }, { passive: true });

    // Smooth anchor handling
    document.addEventListener("click", (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;

      const id = a.getAttribute("href");
      if (!id || id === "#") return;

      const el = document.querySelector(id);
      if (!el) return;

      e.preventDefault();

      const targetY = el.getBoundingClientRect().top + window.scrollY - navHeight;
      const smooth = !config?.reducedMotion;

      window.scrollTo({
        top: targetY,
        behavior: smooth ? "smooth" : "auto",
      });
    });
  }

  // Auto-init on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNav);
  } else {
    initNav();
  }

  // Expose for manual init
  window.__NUTRIGM__ = window.__NUTRIGM__ || {};
  window.__NUTRIGM__.initNav = initNav;
})();
