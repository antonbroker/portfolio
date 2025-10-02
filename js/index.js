// Theme switcher
const themes = ["theme-cyberpunk", "theme-glass", "theme-lightblue"];

// Using local storage for theme
let currentTheme = localStorage.getItem("themeIndex") 
  ? parseInt(localStorage.getItem("themeIndex")) 
  : 0;

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.remove(themes[currentTheme]);
  currentTheme = (currentTheme + 1) % themes.length;
  document.body.classList.add(themes[currentTheme]);

  localStorage.setItem("themeIndex", currentTheme);
});

// Create floating particles
function createFloatingElements() {
  const containers = document.querySelectorAll('.floating-elements');
  const elementCount = 20;

  containers.forEach(container => {
    for (let i = 0; i < elementCount; i++) {
      const element = document.createElement('div');
      element.className = 'floating-element';
      element.style.left = Math.random() * 100 + '%';
      element.style.animationDelay = Math.random() * 15 + 's';
      element.style.animationDuration = (15 + Math.random() * 10) + 's';
      container.appendChild(element);
    }
  })
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  const scrolled = window.scrollY > 50;
  navbar.classList.toggle('scrolled', scrolled);

  // Scroll indicator
  const scrollIndicator = document.querySelector('.scroll-indicator');
  const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  scrollIndicator.style.transform = `scaleX(${scrollPercentage / 100})`;
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Intersection Observer
const observeElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('animate');
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.skill-card, .project-card, .about-content, .about-image, .contact-info')
    .forEach(el => observer.observe(el));
};

// Mouse movement parallax
document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;

  const bgAnimation = document.querySelector('.bg-animation');
  bgAnimation.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
});


// Initialize
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add(themes[currentTheme]);
  createFloatingElements();
  observeElements();
});


// Burger menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navlinks');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('show');
});

// Close burger
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('show');
    });
});


window.addEventListener('load', () => {
  if (location.hash) {
    const id = location.hash.slice(1);
    const el = document.getElementById(id);
    // Браузер уже проскроллил к якорю — просто чистим URL на следующий тик
    // (или пере-скроллим на всякий случай и чистим)
    if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' });
    setTimeout(() => {
      history.replaceState(null, "", window.location.pathname);
    }, 0);
  }
});
