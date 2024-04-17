//============================ HERO TITLE SMOOTH APPEARING

const heroTitle = document.querySelector('.hero-title');

document.addEventListener('DOMContentLoaded', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

function animateOnScroll() {
  const rect = heroTitle.getBoundingClientRect();
  const viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight
  );

  if (rect.top >= 0 && rect.bottom <= viewHeight) {
    heroTitle.classList.add('show');
  } else {
    heroTitle.classList.remove('show');
  }
}
