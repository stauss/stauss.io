(() => {
  function setTheme(theme) {
    const header = document.getElementById("clapat-header");
    if (!header) return;
    const next = theme === "light" ? "light" : "dark";
    header.classList.toggle("is-over-light", next === "light");
    header.classList.toggle("is-over-dark", next === "dark");
  }

  function updateTheme() {
    const header = document.getElementById("clapat-header");
    const sections = Array.from(document.querySelectorAll("[data-header-theme]"));
    if (!header || !sections.length) return;

    const probeY = Math.min(window.innerHeight - 1, Math.max(1, header.getBoundingClientRect().bottom / 2));
    const active = sections.find((section) => {
      const rect = section.getBoundingClientRect();
      return rect.top <= probeY && rect.bottom >= probeY;
    });

    setTheme(active ? active.dataset.headerTheme : "dark");
  }

  window.addEventListener("scroll", updateTheme, { passive: true });
  window.addEventListener("resize", updateTheme);
  document.addEventListener("DOMContentLoaded", updateTheme);
  window.addEventListener("load", updateTheme);
  window.addEventListener("preloaderComplete", updateTheme);
  window.StaussHeaderThemeUpdate = updateTheme;
})();
