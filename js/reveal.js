/**
 * NutriGm Premium - Reveal Animations
 * Intersection Observer-based scroll reveal
 */
(function () {
  "use strict";

  function initReveals() {
    const config = window.__NUTRIGM__?.config;
    const reducedMotion = config?.reducedMotion;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.01,
        rootMargin: "0px 0px -5% 0px",
      }
    );

    // Observe all reveal elements
    document.querySelectorAll(".reveal").forEach((el) => {
      io.observe(el);
    });

    // Safety net: force reveal after 6s
    setTimeout(() => {
      document
        .querySelectorAll(".reveal:not(.is-visible)")
        .forEach((el) => {
          if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add("is-visible");
          }
        });
    }, 6000);
  }

  // Auto-init on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initReveals);
  } else {
    initReveals();
  }

  // Expose for manual init
  window.__NUTRIGM__ = window.__NUTRIGM__ || {};
  window.__NUTRIGM__.initReveals = initReveals;
})();
