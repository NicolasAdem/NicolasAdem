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

// Skills Chart using Chart.js
const ctx = document.getElementById('skillsChart').getContext('2d');
new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['AI', 'Web Dev', 'Innovation', 'Leadership', 'Sustainability', 'Research'],
        datasets: [{
            data: [90, 85, 95, 80, 88, 85],
            backgroundColor: 'rgba(45, 45, 45, 0.2)',
            borderColor: 'rgba(45, 45, 45, 0.8)',
            pointBackgroundColor: 'rgba(45, 45, 45, 1)',
        }]
    },
    options: {
        scales: {
            r: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});

// Animate numbers
const animateValue = (obj, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

// Intersection Observer for animations
const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('stat-number')) {
                animateValue(entry.target, 0, parseInt(entry.target.dataset.value), 2000);
            }
            entry.target.classList.add('animate');
        }
    });
});

document.querySelectorAll('.stat-number, .skill, .story-image').forEach(el => {
    animateOnScroll.observe(el);
});

// Parallax effect for floating shapes
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.shape');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    shapes.forEach(shape => {
        const speed = shape.classList.contains('shape-1') ? 20 : 
                     shape.classList.contains('shape-2') ? -15 : 10;
        shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});
