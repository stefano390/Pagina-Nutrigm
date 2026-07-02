/**
 * NutriGm Premium - Split Text
 * Splits text into words/lines for animation
 * Preserves HTML structure (<br>, <em>, etc.)
 */
(function () {
  "use strict";

  function escapeHTML(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function splitWords(el) {
    if (!el || el.dataset.splitBound) return;

    el.setAttribute("aria-label", el.textContent.trim().replace(/\s+/g, " "));

    const wrap = (text) =>
      text.split(/(\s+)/).map((w) =>
        /^\s+$/.test(w) ? w : `<span class="split-word">${escapeHTML(w)}</span>`
      ).join("");

    const html = Array.from(el.childNodes)
      .map((node) => {
        if (node.nodeType === 3) return wrap(node.textContent);
        if (node.nodeName === "BR") return "<br>";
        if (node.nodeType === 1) {
          const tag = node.tagName.toLowerCase();
          return `<${tag}>${wrap(node.textContent)}</${tag}>`;
        }
        return "";
      })
      .join("");

    el.innerHTML = html;
    el.dataset.splitBound = "1";

    return el.querySelectorAll(".split-word");
  }

  function initSplitText() {
    // Process elements with data-split attribute
    document.querySelectorAll("[data-split]").forEach((el) => {
      const type = el.dataset.split;

      if (type === "words" || type === "lines") {
        splitWords(el);
      }
    });
  }

  // Auto-init on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSplitText);
  } else {
    initSplitText();
  }

  // Expose for manual init
  window.__NUTRIGM__ = window.__NUTRIGM__ || {};
  window.__NUTRIGM__.initSplitText = initSplitText;
  window.__NUTRIGM__.splitWords = splitWords;
})();
