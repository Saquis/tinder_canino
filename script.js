// =============================================
// TinderCanino — Scripts
// =============================================

// Counter animation
let count = 0;
const target = 47;
const el = document.getElementById('counter');
const timer = setInterval(() => {
  count += 1;
  el.textContent = count;
  if (count >= target) clearInterval(timer);
}, 40);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
