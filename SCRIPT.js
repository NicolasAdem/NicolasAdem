// Custom cursor
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    // Scale effect on hoverable elements
    const hoverable = e.target.closest('a, button, .project-card, .dream-card, .tech-badge');
    if (hoverable) {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursor.style.borderColor = 'var(--secondary-color)';
    } else {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.borderColor = 'var(--primary-color)';
    }
});

// Hide cursor when leaving window
document.addEventListener('mouseleave', () => {
    const cursor = document.querySelector('.cursor');
    cursor.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
    const cursor = document.querySelector('.cursor');
    cursor.style.opacity = '1';
});

// Typewriter effect
const texts = [
    "Hello, I'm Nicolas Adem 👋",
    "AI & Robotics Enthusiast 🤖",
    "Future Stanford/Harvard Student 🎓",
    "Innovation-Driven Entrepreneur 💡"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriter = document.querySelector('.typewriter');

function type() {
    const currentText = texts[textIndex];
    if (isDeleting) {
        typewriter.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriter.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typeSpeed = 1500;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

// Start typewriter effect
type();

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Animate journey cards
gsap.utils.toArray('.journey-card').forEach((card, i) => {
    gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        delay: i * 0.2
    });
});

// Animate project cards
gsap.utils.toArray('.project-card').forEach((card, i) => {
    gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        delay: i * 0.2
    });
});

// Animate dream cards
gsap.utils.toArray('.dream-card').forEach((card, i) => {
    gsap.from(card, {
        opacity: 0,
        x: i % 2 === 0 ? -100 : 100,
        duration: 1,
        scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        }
    });
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const limit = hero.offsetTop + hero.offsetHeight;
    
    if (scrolled <= limit) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.querySelector('.hero-content').style.transform = `translateY(${scrolled * -0.5}px)`;
    }
});

// Section title animation
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
            trigger: title,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        }
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    gsap.to(document.body, {
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
    });
});
