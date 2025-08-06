import './style.css'

// Theme Toggle Functionality
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
  themeBtn.textContent = savedTheme === 'dark-theme' ? '☀️' : '🌙';
}

themeBtn?.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  const isDark = body.classList.contains('dark-theme');
  themeBtn.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark-theme' : '');
});

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Code Animation Effect
const codeElement = document.querySelector('.code-animation');
if (codeElement) {
  const codeText = codeElement.textContent;
  codeElement.textContent = '';
  
  let i = 0;
  function typeWriter() {
    if (i < codeText.length) {
      codeElement.textContent += codeText.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  }
  
  // Start typing animation after page load
  setTimeout(typeWriter, 1000);
}

// Intersection Observer for Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('.section, .skill-card, .project-card').forEach(el => {
  observer.observe(el);
});

// Contact Form Handling
const contactForm = document.querySelector('.contact-form');
contactForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);
  
  // Simulate form submission
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;
  
  // Simulate API call
  setTimeout(() => {
    alert('Thank you for your message! I\'ll get back to you soon.');
    contactForm.reset();
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }, 2000);
});

// Mobile Menu Toggle (if needed)
const createMobileMenu = () => {
  const nav = document.querySelector('.nav-menu');
  const navContainer = document.querySelector('.nav-container');
  
  if (window.innerWidth <= 768 && nav) {
    // Add mobile menu button if not exists
    if (!navContainer.querySelector('.mobile-menu-btn')) {
      const mobileBtn = document.createElement('button');
      mobileBtn.className = 'mobile-menu-btn';
      mobileBtn.innerHTML = '☰';
      mobileBtn.setAttribute('aria-label', 'Toggle menu');
      
      mobileBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileBtn.innerHTML = nav.classList.contains('active') ? '✕' : '☰';
      });
      
      navContainer.appendChild(mobileBtn);
    }
  }
};

// Initialize mobile menu and handle resize
createMobileMenu();
window.addEventListener('resize', createMobileMenu);

// Add scroll effect to navbar
const navbar = document.querySelector('.nav');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Add loading animation
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
});

console.log('🚀 Dubai Developer Portfolio loaded successfully!');
console.log('📍 Built with Vite 5.4.10 for Dubai, UAE');