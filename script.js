// =============================================
// 1. SCROLL REVEAL
// যখন section screen-এ আসে তখন fade-in হয়
// =============================================
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
    }
  });
}, { threshold: 0.08 });
 
document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});
 
 
// =============================================
// 2. SKILL BAR ANIMATION
// Skill section দেখা গেলে bar fill হয়
// =============================================
const barObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.w + '%';
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
 
document.querySelectorAll('.skill-fill').forEach(bar => {
  barObserver.observe(bar);
});
 
 
// =============================================
// 3. NAVBAR AUTO-HIDE ON SCROLL DOWN
// নিচে scroll করলে navbar লুকায়, উপরে আসলে দেখায়
// =============================================
let lastScrollY = 0;
const navbar = document.getElementById('navbar');
 
window.addEventListener('scroll', () => {
  const currentY = window.scrollY;
  if (currentY > lastScrollY && currentY > 80) {
    navbar.style.transform = 'translateY(-100%)';
  } else {
    navbar.style.transform = 'translateY(0)';
  }
  lastScrollY = currentY;
});
 