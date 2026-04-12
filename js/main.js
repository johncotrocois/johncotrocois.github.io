// ─── iOS BFCache fix ────────────────────────────────────────────────────────
// Safari restores pages from cache in a way that can leave the page visually
// blank (content in DOM but not painted). Reloading on BFCache restore fixes it.
window.addEventListener("pageshow", (e) => {
  if (e.persisted) window.location.reload();
});

// ─── Carousel ──────────────────────────────────────────────────────────────
const carousel = document.querySelector(".carousel");

if (carousel) {
  const track  = carousel.querySelector(".carousel__track");
  const slides = Array.from(carousel.querySelectorAll(".carousel__slide"));
  const dots   = Array.from(document.querySelectorAll(".carousel__dot"));
  let current  = 0;

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle("carousel__dot--active", i === current));
  }

  carousel.querySelector(".carousel__btn--prev").addEventListener("click", () => goTo(current - 1));
  carousel.querySelector(".carousel__btn--next").addEventListener("click", () => goTo(current + 1));
  dots.forEach((dot, i) => dot.addEventListener("click", () => goTo(i)));

  // Keyboard navigation when carousel is focused
  carousel.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft")  goTo(current - 1);
    if (e.key === "ArrowRight") goTo(current + 1);
  });

  // Touch/swipe
  let touchStartX = 0;
  carousel.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  carousel.addEventListener("touchend",   (e) => {
    const delta = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) goTo(current + Math.sign(delta));
  });

  goTo(0);
}
