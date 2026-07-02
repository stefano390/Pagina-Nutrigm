/**
 * NutriGm Premium - Custom Cursor
 * Two clean circles with mix-blend-mode difference
 */
(function () {
  "use strict";

  function initCursor() {
    const root = document.querySelector("[data-cursor-root]");
    if (!root) return;

    const config = window.__NUTRIGM__?.config;
    if (!config?.hover) return; // Skip on touch devices

    const ring = root.querySelector(".cursor-ring");
    const dot = root.querySelector(".cursor-dot");
    if (!ring || !dot) return;

    // Enable cursor styling
    document.documentElement.classList.add("has-cursor");

    let tx = 0, ty = 0, rx = 0, ry = 0, firstMove = false;

    // Mouse move handler
    window.addEventListener("mousemove", (e) => {
      tx = e.clientX;
      ty = e.clientY;

      // Dot follows immediately
      dot.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;

      // First move - prevent (0,0) flash
      if (!firstMove) {
        firstMove = true;
        rx = tx;
        ry = ty;
        ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
        root.classList.add("is-ready");
      }
    }, { passive: true });

    // Smooth ring follow
    function tick() {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);

    // Hover states
    const HOVERABLES = "[data-cursor], .card, .btn, .bento-card, .testimonial-card, a[href]";

    document.addEventListener("mouseover", (e) => {
      if (e.target.closest(HOVERABLES)) {
        root.classList.add("is-interactive");
      }
    });

    document.addEventListener("mouseout", (e) => {
      if (e.target.closest(HOVERABLES) && !e.relatedTarget?.closest?.(HOVERABLES)) {
        root.classList.remove("is-interactive");
      }
    });
  }

  // Auto-init on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCursor);
  } else {
    initCursor();
  }

  // Expose for manual init
  window.__NUTRIGM__ = window.__NUTRIGM__ || {};
  window.__NUTRIGM__.initCursor = initCursor;
})();
