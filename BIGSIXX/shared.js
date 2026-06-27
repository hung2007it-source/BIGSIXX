// Shared script for all pages
document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Mobile menu
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    }

    // Reveal animations
    const revealElements = document.querySelectorAll('.reveal-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    revealElements.forEach(el => observer.observe(el));

    // Active nav link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) link.classList.add('active');
    });
});

// CV Modal
function openCV(imgSrc, name) {
    document.getElementById('modalImg').src = imgSrc;
    document.getElementById('modalName').innerText = 'Hồ sơ: ' + name;
    document.getElementById('cvModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}
function closeCV() {
    document.getElementById('cvModal').style.display = 'none';
    document.body.style.overflow = '';
}
window.addEventListener('click', e => {
    if (e.target.id === 'cvModal') closeCV();
});
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeCV();
});
