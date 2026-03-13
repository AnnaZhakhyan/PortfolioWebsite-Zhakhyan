// ===== SCROLL ANIMATIONS (cards etc.) =====
const animatedElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

animatedElements.forEach(el => observer.observe(el));


// ===== NAV TRANSITION =====
const navbar = document.querySelector('.navbar');
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    const triggerPoint = hero.offsetHeight * 0.25;

    if (window.scrollY > triggerPoint) {
        navbar.classList.add('show');
        hero.classList.add('fade');
        document.body.classList.add('nav-visible');
    } else {
        navbar.classList.remove('show');
        hero.classList.remove('fade');
        document.body.classList.remove('nav-visible');
    }
    
});
document.addEventListener('mousemove', (e) => {
    const segment = document.createElement('div');
    segment.className = 'trail-segment';
    
    segment.style.left = `${e.pageX}px`;
    segment.style.top = `${e.pageY}px`;
    
    document.body.appendChild(segment);
    
    setTimeout(() => {
      segment.remove();
    }, 500);
  });
  
