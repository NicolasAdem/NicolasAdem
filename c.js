function createFloatingQuotes() {
    const container = document.querySelector('.floating-quotes');
    const quotes = ['"', '"', '❝', '❞'];
    
    for (let i = 0; i < 20; i++) {
        const quote = document.createElement('div');
        quote.className = 'floating-quote';
        quote.textContent = quotes[Math.floor(Math.random() * quotes.length)];
        quote.style.left = `${Math.random() * 100}%`;
        quote.style.animationDuration = `${15 + Math.random() * 10}s`;
        quote.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(quote);
    }
}

// Initialize floating quotes
document.addEventListener('DOMContentLoaded', () => {
    createFloatingQuotes();
    generateTags();
    displayQuotes();
});
