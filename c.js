// quotes.js - PUT THIS IN A SEPARATE FILE
const quotes = [
    // PASTE YOUR QUOTES LIST HERE IN THIS FORMAT:
    {
        text: "Your quote text here",
        author: "Author Name",
        tags: ["tag1", "tag2", "tag3"],
        mood: ["happy", "inspired", "thoughtful", "sad"] // use these 4 moods
    },
    // ... more quotes
];

// app.js - PUT THIS IN A SEPARATE FILE
document.addEventListener('DOMContentLoaded', () => {
    // Create floating quotes animation
    createFloatingQuotes();
    generateTags();
    displayQuotes();
});

function createFloatingQuotes() {
    const container = document.querySelector('.floating-quotes');
    const quoteSymbols = ['❝', '❞', '"', '"'];
    
    // Create 20 floating quote marks
    for (let i = 0; i < 20; i++) {
        const quote = document.createElement('div');
        quote.className = 'floating-quote';
        quote.textContent = quoteSymbols[Math.floor(Math.random() * quoteSymbols.length)];
        quote.style.left = `${Math.random() * 100}vw`;
        quote.style.animationDuration = `${15 + Math.random() * 10}s`;
        quote.style.animationDelay = `${Math.random() * 5}s`;
        quote.style.fontSize = `${Math.random() * 2 + 2}rem`;
        container.appendChild(quote);
    }
}

function generateTags() {
    const allTags = new Set();
    quotes.forEach(quote => {
        quote.tags.forEach(tag => allTags.add(tag));
    });
    
    const tagCloud = document.getElementById('tagCloud');
    tagCloud.innerHTML = '';
    
    Array.from(allTags).forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'tag';
        tagElement.textContent = `#${tag}`;
        tagElement.onclick = () => filterByTag(tag);
        tagCloud.appendChild(tagElement);
    });
}

function filterByTag(tag) {
    const filtered = quotes.filter(quote => quote.tags.includes(tag));
    displayQuotes(filtered);
}

function filterByMood(mood) {
    const filtered = quotes.filter(quote => quote.mood.includes(mood));
    displayQuotes(filtered);
}

function displayQuotes(quotesToShow = quotes) {
    const container = document.getElementById('quoteContainer');
    container.innerHTML = '';
    
    quotesToShow.forEach(quote => {
        const quoteCard = document.createElement('div');
        quoteCard.className = 'quote-card';
        
        quoteCard.innerHTML = `
            <div class="quote-text">❝${quote.text}❞</div>
            <div class="quote-author">- ${quote.author}</div>
            <div class="quote-tags">
                ${quote.tags.map(tag => `<span class="quote-tag">#${tag}</span>`).join('')}
            </div>
        `;
        
        container.appendChild(quoteCard);
    });
}

// Add search functionality
document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = quotes.filter(quote => 
        quote.text.toLowerCase().includes(searchTerm) ||
        quote.author.toLowerCase().includes(searchTerm) ||
        quote.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
    displayQuotes(filtered);
});
