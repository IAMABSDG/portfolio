// --- Animation au scroll ---
const fadeElements = document.querySelectorAll('.fade-in, .fade-up');

function showOnScroll() {
  const trigger = window.innerHeight * 0.85;
  fadeElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add('visible');
  });
}

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);
