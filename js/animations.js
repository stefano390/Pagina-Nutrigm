/**
 * NutriGm Premium - Additional Animations
 * Extra animations for more dynamic feel
 */
(function () {
  "use strict";

  /**
   * Parallax effect for images
   */
  function initParallax() {
    const parallaxElements = document.querySelectorAll("[data-parallax]");

    parallaxElements.forEach((el) => {
      const speed = parseFloat(el.dataset.parallaxSpeed || "0.5");
      const img = el.querySelector("img") || el.querySelector(".parallax-bg");

      if (!img) return;

      window.addEventListener("scroll", () => {
        const rect = el.getBoundingClientRect();
        const scrolled = window.scrollY;
        const rate = (scrolled - rect.top) * speed;

        if (rect.top < window.innerHeight && rect.bottom > 0) {
          img.style.transform = `translate3d(0, ${rate}px, 0)`;
        }
      }, { passive: true });
    });
  }

  /**
   * Floating animation for elements
   */
  function initFloatAnimation() {
    const floatElements = document.querySelectorAll("[data-float]");

    floatElements.forEach((el) => {
      const duration = parseFloat(el.dataset.floatDuration || "3");
      const delay = parseFloat(el.dataset.floatDelay || "0");

      el.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;

      // Add keyframes if not already present
      if (!document.getElementById("float-keyframes")) {
        const style = document.createElement("style");
        style.id = "float-keyframes";
        style.textContent = `
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
        `;
        document.head.appendChild(style);
      }
    });
  }

  /**
   * Scale on scroll animation
   */
  function initScaleOnScroll() {
    if (!window.gsap || !window.ScrollTrigger) return;

    const scaleElements = document.querySelectorAll("[data-scale-scroll]");

    scaleElements.forEach((el) => {
      gsap.fromTo(el,
        { scale: 0.8 },
        {
          scale: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 15%",
            scrub: 1,
          },
        }
      );
    });
  }

  /**
   * Text scramble effect on hover
   */
  function initScrambleText() {
    const scrambleElements = document.querySelectorAll("[data-scramble]");
    const chars = "!<>-_\\/[]{}—=+*^?#________";

    scrambleElements.forEach((el) => {
      const originalText = el.textContent;
      let isAnimating = false;

      el.addEventListener("mouseenter", () => {
        if (isAnimating) return;
        isAnimating = true;

        let iteration = 0;
        const interval = setInterval(() => {
          el.textContent = originalText
            .split("")
            .map((letter, index) => {
              if (index < iteration) return originalText[index];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("");

          if (iteration >= originalText.length) {
            clearInterval(interval);
            isAnimating = false;
          }

          iteration += 1 / 2; // Speed control
        }, 30);
      });
    });
  }

  /**
   * Counter animation for numbers
   */
  function initCounters() {
    const counters = document.querySelectorAll("[data-counter]");

    const animateCounter = (el) => {
      const target = parseFloat(el.dataset.counter);
      const duration = parseFloat(el.dataset.counterDuration || "2000");
      const start = 0;
      const startTime = performance.now();

      const update = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = start + (target - start) * easeOut;

        if (target % 1 !== 0) {
          el.textContent = current.toFixed(1);
        } else {
          el.textContent = Math.floor(current);
        }

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = target;
        }
      };

      requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach((counter) => observer.observe(counter));
  }

  /**
   * Tilt 3D effect for cards
   */
  function init3DTilt() {
    const cards = document.querySelectorAll("[data-tilt]");

    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
      });
    });
  }

  /**
   * Image reveal animation
   */
  function initImageReveal() {
    if (!window.gsap) return;

    const images = document.querySelectorAll("[data-image-reveal]");

    images.forEach((img) => {
      const parent = img.parentElement;
      parent.style.overflow = "hidden";

      gsap.fromTo(img,
        { scale: 1.3 },
        {
          scale: 1,
          scrollTrigger: {
            trigger: img,
            start: "top 85%",
            end: "top 15%",
            scrub: 1,
          },
        }
      );
    });
  }

  /**
   * Auto-initialize all animations
   */
  function initAnimations() {
    // Check for reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      console.log("Animations disabled due to reduced motion preference");
      return;
    }

    initParallax();
    initFloatAnimation();
    initScaleOnScroll();
    initScrambleText();
    initCounters();
    init3DTilt();
    initImageReveal();
  }

  // Auto-init on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAnimations);
  } else {
    initAnimations();
  }

  // Expose for manual init
  window.__NUTRIGM__ = window.__NUTRIGM__ || {};
  window.__NUTRIGM__.initAnimations = initAnimations;
})();
