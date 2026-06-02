// ===== Yusuf Özdemir — Portfolyo etkileşimleri =====

// Yıl
document.getElementById('year').textContent = new Date().getFullYear();

// Mobil menü
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
navToggle.addEventListener('click', () => navMenu.classList.toggle('open'));
navMenu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => navMenu.classList.remove('open'))
);

// Nav scroll arka planı
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 30);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Reveal animasyonu
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('show');
            revealObserver.unobserve(e.target);
        }
    });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Aktif menü linki (scroll-spy)
const sections = [...document.querySelectorAll('main section[id], header[id]')];
const navLinks = [...document.querySelectorAll('.nav__menu a')];
const spy = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            const id = e.target.id;
            navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
        }
    });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach(s => spy.observe(s));
