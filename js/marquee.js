/**
 * NutriGm Premium - Marquee
 * Infinite scrolling ticker
 */
(function () {
  "use strict";

  function initMarquee() {
    const track = document.querySelector("[data-marquee]");
    if (!track) return;

    // Clone content for seamless loop
    const content = track.innerHTML;
    track.innerHTML = content + content;

    // Pause on hover
    track.addEventListener("mouseenter", () => {
      track.style.animationPlayState = "paused";
    });

    track.addEventListener("mouseleave", () => {
      track.style.animationPlayState = "running";
    });
  }

  // Auto-init on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMarquee);
  } else {
    initMarquee();
  }

  // Expose for manual init
  window.__NUTRIGM__ = window.__NUTRIGM__ || {};
  window.__NUTRIGM__.initMarquee = initMarquee;
})();
