// Add this at the top of app.js
console.log("App.js loaded");
console.log("Number of quotes:", quotes.length);

// quotes.js - PUT THIS IN A SEPARATE FILE
const quotes = [
    {
        "text": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "author": "Winston Churchill",
        "tags": ["success", "courage", "perseverance"],
        "mood": ["inspired"]
    },
    {
        "text": "The only limit to our realization of tomorrow is our doubts of today.",
        "author": "Franklin D. Roosevelt",
        "tags": ["future", "doubt", "inspiration"],
        "mood": ["thoughtful"]
    },
    {
        "text": "Don't watch the clock; do what it does. Keep going.",
        "author": "Sam Levenson",
        "tags": ["motivation", "time", "determination"],
        "mood": ["inspired"]
    },
    {
        "text": "You miss 100% of the shots you don’t take.",
        "author": "Wayne Gretzky",
        "tags": ["risk", "opportunity", "motivation"],
        "mood": ["inspired"]
    },
    {
        "text": "In the end, we only regret the chances we didn’t take.",
        "author": "Lewis Carroll",
        "tags": ["regret", "opportunity", "life"],
        "mood": ["thoughtful"]
    },
    {
        "text": "Life is 10% what happens to us and 90% how we react to it.",
        "author": "Charles R. Swindoll",
        "tags": ["life", "attitude", "reaction"],
        "mood": ["thoughtful"]
    },
    {
        "text": "Happiness is not something ready-made. It comes from your own actions.",
        "author": "Dalai Lama",
        "tags": ["happiness", "action", "responsibility"],
        "mood": ["happy"]
    },
    {
        "text": "Do not wait for leaders; do it alone, person to person.",
        "author": "Mother Teresa",
        "tags": ["leadership", "action", "independence"],
        "mood": ["inspired"]
    },
    {
        "text": "The best way to predict the future is to create it.",
        "author": "Peter Drucker",
        "tags": ["future", "creativity", "action"],
        "mood": ["inspired"]
    },
    {
        "text": "Success is going from failure to failure without losing your enthusiasm.",
        "author": "Winston Churchill",
        "tags": ["success", "failure", "enthusiasm"],
        "mood": ["inspired"]
    },
    {
        "text": "You must be the change you wish to see in the world.",
        "author": "Mahatma Gandhi",
        "tags": ["change", "world", "action"],
        "mood": ["inspired"]
    },
    {
        "text": "Keep your face always toward the sunshine—and shadows will fall behind you.",
        "author": "Walt Whitman",
        "tags": ["positivity", "sunshine", "hope"],
        "mood": ["happy"]
    },
    {
        "text": "Believe you can and you're halfway there.",
        "author": "Theodore Roosevelt",
        "tags": ["belief", "determination", "self-confidence"],
        "mood": ["inspired"]
    },
    {
        "text": "Challenges are what make life interesting; overcoming them is what makes life meaningful.",
        "author": "Joshua J. Marine",
        "tags": ["challenges", "meaning", "life"],
        "mood": ["thoughtful"]
    },
    {
        "text": "Dream big and dare to fail.",
        "author": "Norman Vaughan",
        "tags": ["dreams", "courage", "failure"],
        "mood": ["inspired"]
    },
    {
        "text": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "author": "Nelson Mandela",
        "tags": ["resilience", "falling", "strength"],
        "mood": ["inspired"]
    },
    {
        "text": "Our greatest glory is not in never falling, but in rising every time we fall.",
        "author": "Confucius",
        "tags": ["resilience", "strength", "courage"],
        "mood": ["inspired"]
    },
    {
        "text": "It is during our darkest moments that we must focus to see the light.",
        "author": "Aristotle",
        "tags": ["hope", "darkness", "light"],
        "mood": ["thoughtful"]
    },
    {
        "text": "Life itself is the most wonderful fairy tale.",
        "author": "Hans Christian Andersen",
        "tags": ["life", "wonder", "happiness"],
        "mood": ["happy"]
    },
    {
        "text": "Try to be a rainbow in someone’s cloud.",
        "author": "Maya Angelou",
        "tags": ["kindness", "positivity", "happiness"],
        "mood": ["happy"]
    },
    {
        "text": "Happiness is not by chance, but by choice.",
        "author": "Jim Rohn",
        "tags": ["happiness", "choice", "life"],
        "mood": ["happy"]
    },
    {
        "text": "The only thing we have to fear is fear itself.",
        "author": "Franklin D. Roosevelt",
        "tags": ["fear", "courage", "strength"],
        "mood": ["thoughtful"]
    },
    {
        "text": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        "author": "Ralph Waldo Emerson",
        "tags": ["individuality", "authenticity", "self-worth"],
        "mood": ["thoughtful"]
    },
    {
        "text": "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
        "author": "Buddha",
        "tags": ["present", "mindfulness", "focus"],
        "mood": ["thoughtful"]
    },
    {
        "text": "Life is short, and it's up to you to make it sweet.",
        "author": "Sarah Louise Delany",
        "tags": ["life", "sweetness", "happiness"],
        "mood": ["happy"]
    },
    {
        "text": "Life is really simple, but we insist on making it complicated.",
        "author": "Confucius",
        "tags": ["simplicity", "life", "clarity"],
        "mood": ["thoughtful"]
    },
    {
        "text": "Be kind whenever possible. It is always possible.",
        "author": "Dalai Lama",
        "tags": ["kindness", "possibility", "goodness"],
        "mood": ["happy"]
    },
    {
        "text": "The most wasted of days is one without laughter.",
        "author": "E. E. Cummings",
        "tags": ["laughter", "joy", "happiness"],
        "mood": ["happy"]
    },
    {
        "text": "No act of kindness, no matter how small, is ever wasted.",
        "author": "Aesop",
        "tags": ["kindness", "goodness", "impact"],
        "mood": ["happy"]
    },
    {
        "text": "Success is not how high you have climbed, but how you make a positive difference to the world.",
        "author": "Roy T. Bennett",
        "tags": ["success", "impact", "difference"],
        "mood": ["inspired"]
    },
    {
        "text": "Do one thing every day that scares you.",
        "author": "Eleanor Roosevelt",
        "tags": ["courage", "fear", "growth"],
        "mood": ["inspired"]
    },
    {
        "text": "With the new day comes new strength and new thoughts.",
        "author": "Eleanor Roosevelt",
        "tags": ["strength", "new beginnings", "thoughts"],
        "mood": ["inspired"]
    },
    {
        "text": "You do not find the happy life. You make it.",
        "author": "Camilla E. Kimball",
        "tags": ["happiness", "life", "creation"],
        "mood": ["happy"]
    },
    {
        "text": "When life gives you Monday, dip it in glitter and sparkle all day.",
        "author": "Unknown",
        "tags": ["Monday", "positivity", "happiness"],
        "mood": ["happy"]
    },
    {
        "text": "Don't count the days, make the days count.",
        "author": "Muhammad Ali",
        "tags": ["time", "life", "meaning"],
        "mood": ["inspired"]
    },
    {
        "text": "Be so good they can’t ignore you.",
        "author": "Steve Martin",
        "tags": ["excellence", "recognition", "self-worth"],
        "mood": ["inspired"]
    },
    {
        "text": "If you want to fly, you have to give up the things that weigh you down.",
        "author": "Toni Morrison",
        "tags": ["freedom", "letting go", "strength"],
        "mood": ["thoughtful"]
    },
    {
        "text": "Happiness often sneaks in through a door you didn’t know you left open.",
        "author": "John Barrymore",
        "tags": ["happiness", "surprise", "life"],
        "mood": ["happy"]
    },
    {
        "text": "The purpose of life is to believe, to hope, and to strive.",
        "author": "Indira Gandhi",
        "tags": ["purpose", "hope", "striving"],
        "mood": ["inspired"]
    },
    {
        "text": "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        "author": "Ralph Waldo Emerson",
        "tags": ["strength", "within", "inspiration"],
        "mood": ["thoughtful"]
    },
    {
        "text": "When you reach the end of your rope, tie a knot in it and hang on.",
        "author": "Franklin D. Roosevelt",
        "tags": ["perseverance", "strength", "hope"],
        "mood": ["inspired"]
    },
    {
        "text": "Nothing is impossible; the word itself says, ‘I’m possible!’",
        "author": "Audrey Hepburn",
        "tags": ["possibility", "optimism", "hope"],
        "mood": ["inspired"]
    },
    {
        "text": "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        "author": "Mother Teresa",
        "tags": ["love", "happiness", "kindness"],
        "mood": ["happy"]
    },
    {
        "text": "Perfection is not attainable, but if we chase perfection we can catch excellence.",
        "author": "Vince Lombardi",
        "tags": ["excellence", "perfection", "effort"],
        "mood": ["inspired"]
    },
    {
        "text": "Do not let making a living prevent you from making a life.",
        "author": "John Wooden",
        "tags": ["life", "balance", "meaning"],
        "mood": ["thoughtful"]
    },
    {
        "text": "It is not how much we have, but how much we enjoy, that makes happiness.",
        "author": "Charles Spurgeon",
        "tags": ["happiness", "gratitude", "enjoyment"],
        "mood": ["happy"]
    },
    {
        "text": "Happiness depends upon ourselves.",
        "author": "Aristotle",
        "tags": ["happiness", "responsibility", "self"],
        "mood": ["thoughtful"]
    },
    {
        "text": "Turn your wounds into wisdom.",
        "author": "Oprah Winfrey",
        "tags": ["wisdom", "growth", "strength"],
        "mood": ["thoughtful"]
    }
]
;

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
