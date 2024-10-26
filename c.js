// Scroll Progress Indicator
window.addEventListener('scroll', () => {
    const scrollProgress = document.querySelector('.scroll-progress');
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const progress = `${(scrolled / scrollable) * 100}%`;
    scrollProgress.style.width = progress;
});

// Smooth Scroll Function
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Intersection Observer for Animations
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Form Submission Handler
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
});

// Add hover effect for milestone cards
document.querySelectorAll('.milestone').forEach(milestone => {
    milestone.addEventListener('mouseenter', () => {
        milestone.style.transform = 'scale(1.02)';
    });
    milestone.addEventListener('mouseleave', () => {
        milestone.style.transform = 'scale(1)';
    });
});

// Initialize the page with smooth transitions
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
});
