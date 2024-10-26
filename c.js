// scripts.js
// This is where you'll paste your quotes list
const quotes = [
    {
        text: "Example quote 1",
        tags: ["inspiration", "life", "happy"],
        mood: ["happy", "inspired"]
    },
    // Paste your quotes here in this format
];

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

function displayQuotes(quotesToShow = quotes) {
    const container = document.getElementById('quoteContainer');
    container.innerHTML = '';
    
    quotesToShow.forEach(quote => {
        const quoteCard = document.createElement('div');
        quoteCard.className = 'quote-card';
        
        quoteCard.innerHTML = `
            <div class="quote-text">"${quote.text}"</div>
            <div class="quote-tags">
                ${quote.tags.map(tag => `<span class="quote-tag">#${tag}</span>`).join('')}
            </div>
        `;
        
        container.appendChild(quoteCard);
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

document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = quotes.filter(quote => 
        quote.text.toLowerCase().includes(searchTerm) ||
        quote.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
    displayQuotes(filtered);
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    generateTags();
    displayQuotes();
});
