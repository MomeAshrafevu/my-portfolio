 
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
 
