// Import ScrollReveal for scroll animations
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '30px',
    duration: 1000,
    reset: true
});

// Progress bar
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.querySelector('.progress-bar').style.width = scrolled + '%';
});

// Parallax effect for hero section
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    document.querySelector('.parallax-background').style.transform = 
        `translate(${moveX}px, ${moveY}px) scale(2)`;
});

// Typing effect for subtext
const subtext = document.querySelector('.subtext');
const text = subtext.textContent;
subtext.textContent = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        subtext.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

// Start typing animation after page load
window.addEventListener('load', typeWriter);

// Scroll animations for different sections
sr.reveal('.timeline-item', { interval: 200 });
sr.reveal('.skill-pillar', { 
    origin: 'left',
    interval: 200 
});
sr.reveal('.vision-item', {
    origin: 'bottom',
    interval: 200
});
sr.reveal('.testimonial-card', {
    origin: 'right',
    interval: 200
});

// Project carousel rotation
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
    });
});

// Form animations and validation
const formFields = document.querySelectorAll('.form-field input, .form-field textarea');
formFields.forEach(field => {
    field.addEventListener('focus', () => {
        field.parentElement.classList.add('focused');
    });
    
    field.addEventListener('blur', () => {
        if (!field.value) {
            field.parentElement.classList.remove('focused');
        }
    });
});

// Form submission with animation
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Add success animation
    const submitButton = contactForm.querySelector('.submit-button');
    submitButton.classList.add('success');
    
    // Reset form after animation
    setTimeout(() => {
        contactForm.reset();
        submitButton.classList.remove('success');
    }, 2000);
});

// Back to top button
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Floating icons animation
const icons = document.querySelectorAll('.floating-icon');
icons.forEach(icon => {
    setInterval(() => {
        icon.style.transform = `translateY(${Math.random() * 10}px)`;
    }, 2000);
});

// Audio feedback for interactions
function playSound(type) {
    const audio = new Audio();
    switch(type) {
        case 'click':
            audio.src = 'path-to-click-sound.mp3';
            break;
        case 'hover':
            audio.src = 'path-to-hover-sound.mp3';
            break;
    }
    audio.volume = 0.2;
    audio.play();
}

// Add sound effects to interactive elements
document.querySelectorAll('button, .social-icon').forEach(element => {
    element.addEventListener('click', () => playSound('click'));
    element.addEventListener('mouseenter', () => playSound('hover'));
});

// Initialize testimonial slider
let currentSlide = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');

function showSlide(index) {
    testimonialCards.forEach(card => card.style.display = 'none');
    testimonialCards[index].style.display = 'block';
    
    // Add cube rotation effect
    testimonialCards[index].style.transform = 'rotateY(0deg)';
    playSound('click');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % testimonialCards.length;
    showSlide(currentSlide);
}

// Auto-advance testimonials
setInterval(nextSlide, 5000);

// Initialize first slide
showSlide(0);

// Prevent form submission if fields are empty
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    const requiredFields = document.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.classList.add('error');
        } else {
            field.classList.remove('error');
        }
    });
    
    if (!isValid) {
        e.preventDefault();
    }
});
