(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const parallaxItems = Array.from(document.querySelectorAll("[data-speed]"));
  if (!parallaxItems.length || reduceMotion.matches) return;

  let ticking = false;

  function updatePortfolioParallax() {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    parallaxItems.forEach(function (item) {
      const speed = parseFloat(item.getAttribute("data-speed")) || 0;
      const rect = item.getBoundingClientRect();
      if (rect.bottom < -viewportHeight * 0.2 || rect.top > viewportHeight * 1.2) return;

      const midpoint = rect.top + rect.height / 2 - viewportHeight / 2;
      const translate = midpoint * speed;
      const scale = item.classList.contains("portfolio-parallax-img") ? " scale(1.06)" : "";
      item.style.transform = "translate3d(0," + translate.toFixed(2) + "px,0)" + scale;
    });

    ticking = false;
  }

  function requestPortfolioParallax() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updatePortfolioParallax);
  }

  window.addEventListener("scroll", requestPortfolioParallax, { passive: true });
  window.addEventListener("resize", requestPortfolioParallax);
  window.addEventListener("load", requestPortfolioParallax);
  requestPortfolioParallax();
})();
