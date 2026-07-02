/**
 * NutriGm Premium - Magnetic Buttons
 * Buttons that follow the cursor slightly
 */
(function () {
  "use strict";

  function initMagnetic() {
    const config = window.__NUTRIGM__?.config;
    if (!config?.hover) return; // Skip on touch devices

    document.querySelectorAll("[data-magnetic]").forEach((el) => {
      if (el.dataset.magneticBound) return; // Idempotent

      const strength = parseFloat(el.dataset.magneticStrength || "0.3");
      const inner = document.createElement("span");
      inner.className = "btn-inner magnetic-inner";

      // Move existing content to inner span
      while (el.firstChild) {
        inner.appendChild(el.firstChild);
      }
      el.appendChild(inner);

      el.classList.add("has-magnetic");
      el.dataset.magneticBound = "1";

      let tx = 0, ty = 0, cx = 0, cy = 0, raf = null;

      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        tx = (e.clientX - r.left - r.width / 2) * strength;
        ty = (e.clientY - r.top - r.height / 2) * strength;
        if (!raf) raf = requestAnimationFrame(loop);
      });

      el.addEventListener("mouseleave", () => {
        tx = 0;
        ty = 0;
        if (!raf) raf = requestAnimationFrame(loop);
      });

      function loop() {
        cx += (tx - cx) * 0.2;
        cy += (ty - cy) * 0.2;
        inner.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;

        const dist = Math.abs(tx - cx) + Math.abs(ty - cy);
        raf = dist > 0.1 ? requestAnimationFrame(loop) : null;
      }
    });
  }

  // Auto-init on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMagnetic);
  } else {
    initMagnetic();
  }

  // Expose for manual init
  window.__NUTRIGM__ = window.__NUTRIGM__ || {};
  window.__NUTRIGM__.initMagnetic = initMagnetic;
})();
