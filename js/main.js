/**
 * NutriGm Premium - Main Initialization
 * Bootstraps all effects and handles splash screen
 */
(function () {
  "use strict";

  // Safe wrapper for init functions
  function safe(fn, name) {
    try {
      fn();
    } catch (e) {
      console.warn(`[${name}]`, e);
    }
  }

  // Initialize splash screen
  function initSplash() {
    const splash = document.querySelector("[data-splash]");
    if (!splash) return;

    const hide = () => splash.classList.add("is-out");

    if (document.readyState === "complete") {
      setTimeout(hide, 600);
    } else {
      window.addEventListener("load", () => setTimeout(hide, 400));
    }

    // Fallback safety
    setTimeout(hide, 4000);
  }

  // Register GSAP plugins
  function initGSAP() {
    if (window.gsap && window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }
  }

  // Hero animations
  function initHero() {
    if (!window.gsap) return;

    // Animate hero elements on load
    const tl = gsap.timeline({
      delay: 0.5,
      defaults: {
        ease: "power2.out",
        duration: 1,
      },
    });

    tl.from(".hero-kicker", { opacity: 0, y: 20 })
      .from(".hero-title .line", {
        opacity: 0,
        y: 40,
        stagger: 0.1,
      },
      "-=0.5")
      .from(".hero-sub", { opacity: 0, y: 20 }, "-=0.7")
      .from(".hero-actions", { opacity: 0, y: 20 }, "-=0.7")
      .from(".hero-image-wrapper", {
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
      },
      "-=1");
  }

  // Form handling
  function initForm() {
    const form = document.querySelector("[data-form]");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!form.reportValidity()) return;

      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = "Enviando...";
      btn.disabled = true;

      // Simulate form submission
      setTimeout(() => {
        btn.textContent = "¡Mensaje enviado!";
        btn.classList.add("btn-success");

        setTimeout(() => {
          btn.textContent = originalText;
          btn.disabled = false;
          btn.classList.remove("btn-success");
          form.reset();
        }, 3000);
      }, 1500);
    });
  }

  // Boot everything
  function boot() {
    safe(initSplash, "initSplash");
    safe(initGSAP, "initGSAP");

    // Init effects
    safe(() => window.__NUTRIGM__?.initCursor?.(), "initCursor");
    safe(() => window.__NUTRIGM__?.initNav?.(), "initNav");
    safe(() => window.__NUTRIGM__?.initSplitText?.(), "initSplitText");
    safe(() => window.__NUTRIGM__?.initReveals?.(), "initReveals");
    safe(() => window.__NUTRIGM__?.initMagnetic?.(), "initMagnetic");
    safe(() => window.__NUTRIGM__?.initMarquee?.(), "initMarquee");
    safe(() => window.__NUTRIGM__?.initAnimations?.(), "initAnimations");

    safe(initHero, "initHero");
    safe(initForm, "initForm");

    // Mark as ready
    window.__NUTRIGM__.state.isReady = true;
  }

  // Start when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
