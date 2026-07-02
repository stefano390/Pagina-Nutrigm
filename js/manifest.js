/**
 * NutriGm Premium - Manifest
 * Global data and configuration
 */
(function () {
  "use strict";

  window.__NUTRIGM__ = {
    version: "1.0.0",
    name: "NutriGm",
    tagline: "Nutrición Consciente",

    // Configuration
    config: {
      navHeight: 80,
      reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      hover: window.matchMedia("(hover: hover) and (pointer: fine)").matches,
    },

    // Easing functions (matching CSS)
    easing: {
      out: [0.23, 1, 0.32, 1],
      soft: [0.25, 0.1, 0.25, 1],
      bounce: [0.34, 1.56, 0.64, 1],
    },

    // State
    state: {
      isReady: false,
      isScrolling: false,
    },
  };
})();
