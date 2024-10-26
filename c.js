function convertQuotes(rawQuotes) {
    return rawQuotes.split('\n').map(quote => ({
        text: quote.split('-')[0].trim().replace(/["]/g, ''),
        tags: ["wisdom"], // Default tag
        mood: ["thoughtful"] // Default mood
    }));
}

// Usage example:
const rawQuotes = `
"Leverage is what can turn a problem into a brilliant solution that impacts millions of lives." - Nicolas Adem

"I'll procrastinate tomorrow." - Nicolas Adem

"The only way to really concentrate is to occasionally let yourself go and make some lame word jokes." - Nicolas Adem

"Life is like riding a bicycle. To keep your balance, you must keep moving." - Albert Einstein

"Imagination is more important than knowledge. For knowledge is limited, whereas imagination encircles the world." - Albert Einstein

"In the middle of difficulty lies opportunity." - Albert Einstein

"The distinction between the past, present, and future is only a stubbornly persistent illusion." - Albert Einstein

"I have no special talent. I'm just passionately curious." - Albert Einstein

"It's better to be good at multiple things than to excel at just one, like crafting a cocktail: even with the best rum in the world, you have no chance against the combination of ingredients that make a cocktail unbeatable." - Nicolas Adem

"Whether you think you can, or you think you can't – you're right." - Henry Ford

"Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshine." - Jack Ma

"Business opportunities are like buses, there’s always another one coming." - Richard Branson

"Don't compare yourself with anyone in this world. If you do so, you are insulting yourself."
 - Bill Gates

"If you're offered a seat on a rocket ship, don't ask what seat! Just get on." - Sheryl Sandberg

"If you don’t understand the details of your business, you are going to fail." - Oprah Winfrey
"It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you'll do things differently." - Warren Buffett

"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do." - Steve Jobs

"Virtue is a mean between two extremes, and the mean is where virtue lies." - Aristotle

"The only good is knowledge, the only evil is ignorance." - Socrates

"You must be the change you want to see in the world." - Mahatma Gandhi

"Negative people only teach you to make everything a problem. For entrepreneurs, this opens worlds." - Anonymous

"Action is the foundation. Learning is the supplementation." - Anonymous

"Don't build an empire on rented ground. Make sure to have your own domain hosted with a good web host." - Anonymous

"The desire for a smooth road is what makes people fail at the first roadblock. If they know a long, rough way is coming, then they've found the way to make it smooth." - Anonymous

"It doesn't become easier. You just get better." - Anonymous

"At least I know that I know nothing." - Socrates

"When it feels scary to jump, that's exactly when you need to jump. Otherwise, you stay in the same place your whole life." - Anonymous

"Discovery consists of seeing what everyone has seen and thinking what nobody has thought." - Albert Szent-Györgyi

"Only dead fish go with the flow." - Anonymous

"God is with those who persevere." - Anonymous

"Brilliant thinking is rare, but courage is in even shorter supply than genius." - Peter Thiel

"We are what we repeatedly do. Excellence is not an act, but a habit." - Aristotle

"Intense curiosity keeps you young. When we're green we grow, when we're ripe we rot." - Ray Kroc

"Trust is one of the greatest economic forces on earth." - Charlie Munger

"Curiosity is the secret to doing great work." - Paul Graham

"Conflict yields a better result than agreement." - Jeff Bezos

"When something is important enough, you do it even if the odds are not in your favor." - Elon Musk

"I think it is possible for ordinary people to choose to be extraordinary." - Elon Musk

"Sometimes great innovators are risk-seeking man-children. They can be reckless, cringeworthy, sometimes even toxic. They can also be crazy. Crazy enough to think they can change the world." - Walter Isaacson

"Step by step, ferociously." - Jeff Bezos

"The need for change bulldozed a road down the center of my mind." - Maya Angelou

"Catch a man a fish, and you can sell it to him. Teach a man to fish, and you ruin a wonderful business opportunity." - Karl Marx

"Business opportunities are like buses; there's always another one coming." - Richard Branson

"Plans are only good intentions unless they immediately degenerate into hard work." - Peter F. Drucker

"I have nothing to offer but blood, toil, tears, and sweat." - Winston Churchill

"Before beginning, prepare carefully." - Marcus Tullius Cicero

"Good things happen to those who hustle." - Anaïs Nin

"Money is better than poverty, if only for financial reasons." - Woody Allen

"Remind people that profit is the difference between revenue and expense. This makes you look smart." - Scott Adams

"I'm not a businessman; I'm a business, man." - Jay-Z

"Nothing will work unless you do." - Maya Angelou

"Your time is limited, so don't waste it living someone else's life." - Steve Jobs

"Passion, though a bad regulator, is a powerful spring." - Ralph Waldo Emerson

"Fear is a demon that devours the soul of a company." - Anonymous

"Self-doubt is the enemy of creativity." - Anonymous

"How great we become depends on the size of our dreams. Dream big dreams." - Anonymous

"If you have to choose between agreement and conflict, take conflict every time. It always yields a better result." - Jeff Bezos

"It's the cracked ones that let light into the world." - Anonymous

"Have a habit of divine discontent with your performance. It is an antidote to smugness." - Anonymous

"Dogged determination is often the only trait that separates a moderately creative person from a highly creative one." - Anonymous

"Our character is a composite of our habits." - Anonymous

"Persistence and determination alone are omnipotent. Before them, obstacles vanish into thin air and mountains crumble into atoms." - Anonymous

"People don't have ideas. Ideas have people." - Anonymous

"The best leaders give their people permission to practice magic. They get rid of sad dogs who spread gloom." - Anonymous

"Habit is overcome by habit." - Anonymous

"If we avoid candor, we destroy trust." - Anonymous

"You fight against the tyranny of politeness by telling the truth." - Anonymous

"Making great work requires us to be brutally honest and totally dedicated to the truth." - Anonymous

"In the absence of courage, nothing worthwhile can be accomplished." - Anonymous

"DON'T BOW YOUR HEAD. DON'T KNOW YOUR PLACE. DON'T SIT BACK. DON'T GIVE IN. DON'T GIVE UP. DON'T WIN SILVERS. DON'T BE SO EASILY HAPPY WITH YOURSELF. DON'T BE SPINELESS. DON'T BE GUTLESS. DON'T BE TOADIES. DON'T GO GENTLE INTO THAT GOOD NIGHT. DEFY THE GODS." - Anonymous

"We are the people we have been waiting for." - Anonymous

"Divine discontent means defying the gods, not giving in, not giving up, and never being easily happy with yourself." - David Ogilvy

"Create every day." - Anonymous

"If not you, then who?" - Anonymous

"Business is like poker: you have to bluff if you want to win." - Anonymous

"Tell yourself over and over again, 'Damn, it's not over until I win!'" - Anonymous

"If someone talks shit about you behind your back, know that they are behind you for a reason." - Anonymous

"Curiosity + Effort = Developing Skills + Achieving Results" - Anonymous

"Entrepreneurship is not 'what work am I going to do?' but 'what problem am I going to solve?'" - Anonymous

"Love is a feeling that comes and goes. Remember that when you fall in love. Remember that when you break up. Remember that when your heart is broken." - Anonymous

"Be enthusiastic." - Anonymous

"Accept everyone's opinion and listen to them if you want them to listen to you." - Anonymous

"If you go for something 100%, that means not 80%, not 95%, but 100%, you will get what you want, whatever that may be." - Anonymous

"I can't be sure I'll get anywhere if I work hard, but I'm sure I'll get nowhere if I don't, and that feels awful." - Anonymous

"It doesn't matter what you work on, but how you work on it." - Anonymous

"The hardest part is getting started. The rest is just going with the flow and seeing where you end up. The future is unpredictable." - Anonymous

"Yesterday is history. Tomorrow is a mystery. But today is a gift. That is why it is called the present." - Anonymous

"90% of your life you get by just being there and engaging." - Anonymous

"Be genuinely interested. That's the best way to do good work and learn at cruising speed." - Anonymous

"You need consistency. There are only 24 hours in a day." - Anonymous

"If you are motivated, then you are not made for vacation, but for hard work, just like Elon Musk." - Anonymous

"Well done if you feel depressed on vacation because you are not getting anything done. That means you are destined to create and achieve." - Anonymous

"Starting is hard. Keeping going even harder." - Anonymous

"Keep an overview of what you are doing. Don't get lost in all the details." - Anonymous

"All great innovators start small. Later, after consistency and a bumpy path, they became what they are today: a great innovator." - Anonymous

"Neither luck nor fame exists. Only we shape our future." - Anonymous

"Money, power and love are one energy." - Anonymous

"Life is a series of trades." - Anonymous

"Give without expecting anything in return." - Anonymous

"Life proceeds in chapters." - Anonymous

"Patience is what every entrepreneur needs and is given to only a few, although it is a trait to be learned." - Anonymous

"Say to yourself over and over again, 'I'm going to be successful! I got this! Let's do this!'" - Anonymous

"We cannot see Elon Musk as an example in the entrepreneurial world, only as an inspiration." - Anonymous

"People above you will never criticize you. Only those below you will." - Anonymous

"You need to work at a startup for at least 2 years and find a mentor so you can learn quickly and be able to handle it on your own later." - Anonymous

"You really need a mentor to learn efficiently." - Anonymous

"Selling = rational + emotional + urgency" - Anonymous

"No news: don't watch the news." - Anonymous

"Delve into circles of billionaires and millionaires and make sure you hang out with the quality people around you. If there aren't any, look elsewhere." - Anonymous

"A good idea comes from someone who had the courage to keep going after 100 bad ideas." - Anonymous

"Think about 10 ideas and filter out the best ones. Then get to work." - Anonymous

"Use surveys to generate leads!" - Anonymous

"Leads + brochure + offer + order (waiting list) = product market fit" - Anonymous

"The difficult thing about going 100% for something is that you have no certainty of success. Being an atheist, that's hard for me, because I have to believe in something that may not be there: taking a risk." - Anonymous

"The moment you want to quit is the moment you have to keep pushing. Turn the pain into strength." - Anonymous

"Our minds are great for getting ideas and pen and paper are great for writing them down." - Anonymous

"There is always room for improvement." - Anonymous

"You have to be the best (top 10%) at what you do. Otherwise, you don't even have a chance." - Anonymous

"Eliminate your competitors." - Anonymous

"OQP: Only Quality People." - Anonymous

"No distractions. Focus is #1 important in life." - Anonymous

"Think differently, no matter what they say. Try to be independent-minded." - Anonymous

"Skepticism about truth and resistance to what to think leave no space in your brain, and curiosity finds ideas to fill that space." - Anonymous

"Don't be afraid to try something new." - Anonymous

"Keep pushing to find great results alongside an unconventional, uncertain idea." - Anonymous

"Bill Gates... Gives priority to self-interest. Is an extortionist. Is an extreme bluffer. In short, a great entrepreneur." - Anonymous

"4 core traits of Bill Gates: - He is very smart. - He is extremely competitive. - He wants to show how smart he is. - He is very consistent." - Anonymous

"People will always hope that they can somehow benefit from your success." - Anonymous

"Honest truth: The best entrepreneurs are always a little overconfident." - Anonymous

"If you are discouraged, focus not on where you are, but on the change." - Anonymous

"Master the art of assessing early work by studying the history of great people." - Anonymous

"Training and development are essential. Invest in yourself and your team's skills." - Anonymous

"School teaches you a lesson and then gives you a test. But life gives you a test and then teaches you a lesson." - Anonymous

"Success is a small part of success. Resilience is a big part of success. Failure is the biggest part of success." - Anonymous

"Always be positive. Always smile. Always be happy." - Anonymous

"Reflecting makes you happy." - Anonymous

"Teach everything you know." - Anonymous

"Work in public." - Anonymous

"Set priorities and stick to them." - Anonymous

"Making money is a skill, just like doing business, playing the piano or anything else." - Anonymous

"An essay should be useful, not persuasive, so be correct and tell people something they didn't already know." - Anonymous

"Make something you, yourself, want." - Anonymous

"You have 2 types of businessmen: the extreme ones, and the moderate ones, so choose wisely which path you want to follow." - Anonymous

"A startup needs only one thing: users/customers/consumers/.... and you get those not with a 'big launch,' but by making the product great." - Anonymous

"Good work = natural ability + determination + an obsessive interest in what is important (you are never sure what is important)." - Anonymous

"If it were easy, someone else would have already done it for you." - Anonymous

"Learning something you are interested in is super fun!" - Anonymous

"Powerful + uncharismatic = not being loved" - Anonymous

"The best places (like Pittsburgh) were rich and are now poor." - Anonymous

"The best way to learn entrepreneurship is to take action." - Anonymous

"You don't need investors. You need a team." - Anonymous

"Life is short. Don't wait to do things that are important and enjoy the time you have." - Anonymous

"Determination is the most important factor in startups." - Anonymous

"There has been exponential growth throughout history, especially in technology (which really exploded) and we should not stop that. We should go with it and use it to make the world a better place." - Anonymous

"Having a business ≠ having a job" - Anonymous

"Speed is a skill and, above all, a huge advantage." - Anonymous

"Skills don't disappear, they stay for life. So if you get a chance to learn something new, take it." - Anonymous

"You have to learn new skills and become a different person if you want to achieve a goal. It may not be a big transformation, but it will be there. So prepare yourself." - Anonymous

"Dare to invest." - Anonymous

"Dare to lose. And win." - Anonymous

"Write 1000 words every day: share your journey and what you've learned." - Anonymous

"3 laws of the flywheel: - each action flows smoothly into the next - with each revolution it gets easier - each revolution delivers more than the previous one" - Anonymous

"In the flywheel idea, it is important to make sure you have a good loop-closer." - Anonymous

"Keep learning." - Anonymous

"Success is different for everyone." - Anonymous

"Success is a combination of curiosity, pleasure and desire." - Anonymous

"The weirder your taste in interestingness, the better." - Anonymous

"Make what you need, write what you want to read, not what your audience could need." - Anonymous

"Make what you need, write what you want to read, not what your audience could need." - Anonymous

"Don't plan too much: learn to go with the flow." - Anonymous

"Do what seems most interesting to you at the moment and gives you the best options for the future: stay upwind." - Anonymous

"Try to finish what you start." - Anonymous

"Being consistent in something you are really interested in is a superpower." - Anonymous

"Growth is exponential. It's a flywheel. It's hard at first, but once you start, it gets easier. The curve feels flat at first." - Anonymous

"Laser focus." - Anonymous

"If you don't try to be the best, you won't even be good." - Anonymous

"If you succeed in an ambitious project, you are not a nobody; you are the one who did it." - Anonymous

"No one is real in this world. Everyone has a double face." - Anonymous

"People respect the money, not the person." - Anonymous

"The person you love will hurt you the most." - Anonymous

"When you are happy, you enjoy the music. If you are sad, you understand the lyrics." - Anonymous

"Two things define our lives: our patience when we have nothing and our attitude when we have everything." - Anonymous

"People like good looks, not good thoughts." - Anonymous

"First failure hits you publicly, and then success hugs you privately." - Anonymous

"A poor person usually has no friends, but if they have them, they have good ones." - Anonymous

"Trust means everything, but once it is broken, sorry means nothing." - Anonymous

"Be full of energy and be earnest." - Anonymous

"Don't get sad because someone doesn't reciprocate your love. Instead, use that feeling to do your best and perform better than ever before. That will even attract them." - Anonymous

"The place to plan your future is in the present." - Anonymous

"If you are inspired, you will create an inspired vision." - Anonymous

"Everyone has an emotional boundary, high or low. But the higher, the more explosive." - Anonymous

"You must first learn, and fail, to gain experience and earn in the future." - Anonymous

"What people ask you to do, you can change for later." - Anonymous

"The best people start at the bottom." - Anonymous

"When you write online, let other people judge. Write something you stand behind." - Anonymous

"Everything is how we do everything." - Anonymous

"You will have to grind. Go for it 100% and just do it with as much energy as you can. Criteria of an excellent article: beautiful, useful, interesting, something that makes money." - Anonymous

"Take only cold showers to wake up and go running." - Anonymous

"Choose the right game to play: 2k € turnover per month, do good business and sell these products!" - Anonymous

"A good entrepreneur is not obsessed with how to do something, but by identifying the people who already know how to do it." - Anonymous

"The 4Ps: purpose, products, placement, people." - Anonymous

"A year-long talk is always a great way to get things done." - Anonymous

"My dream of finding out what you don't like today will be my mission tomorrow. It will be the reason why I wake up and do what I do." - Anonymous

"Entrepreneurship is a team sport, so you better think win-win." - Anonymous

"Turn fear into something positive." - Anonymous

"Stay entrepreneurial." - Anonymous

"Stick to your goals." - Anonymous

"You can figure out your business as you go along. It will be scary." - Anonymous

"Take action. Now, not how." - Anonymous

"The first thing to do is look at the lead." - Anonymous

"Find an environment that lifts you up. You need to get involved, find entrepreneurial groups, a mentor and surround yourself with the environment." - Anonymous

"Turn a boring company into an exciting company." - Anonymous

"Embrace the AI evolution." - Anonymous

"Be the H1 in your market." - Anonymous

"Do more of what works." - Anonymous

"To get an unfair advantage, provide remarkable service." - Anonymous

"You become the best version of yourself in difficult times. Remember when you stare at the abyss, the abyss stares back at you." - Anonymous

"An idea written down becomes a goal. A goal broken down into steps becomes a plan. An executed plan becomes reality." - Anonymous

"It can take 20 years to build a reputation and 5 minutes to ruin it. If you think about that, you'll do things differently." - Warren Buffett

"Knowing is not enough, we must apply. Willing is not enough, we must do." - Bruce Lee

"Courage is what it takes to stand up and speak, courage is what it takes to sit down and listen." - Winston Churchill

"Speak softly and carry a big stick, you will get far." - Theodore Roosevelt

"Try to fail. Get better." - Anonymous

"When you ask, you get." - Anonymous

"Failing is a learning opportunity." - Anonymous

"Keep trying. You will keep failing too, but you'll also succeed." - Anonymous

"Take action and move forward. Knowledge doesn't make you a millionaire." - Anonymous

"Ask, ask, ask! Just show up at the door and you'll be surprised with what you can get." - Anonymous

"The first step is to get only one thing done." - Anonymous

"Think about your inner strengths, the things that you're good at, and start there." - Anonymous

"You're going to get what you get, not what you want." - Anonymous

"Patience in the results. Impatience with the actions." - Anonymous

"Play the long-term game in the entrepreneurial game." - Anonymous

"As the business gets going, everything will become clear." - Anonymous

"Have a dream bigger than your fear." - Anonymous

"Be optimistic at all times. It's a superpower!" - Anonymous

"A good programmer just knows how to search things effectively on Google." - Anonymous

"The most underrated Sales OS is a great slide deck." - Anonymous

"People like being involved." - Anonymous

"People only buy when they're 100%. But joining a waiting list requires only 5-10%. They like being warmed up." - Anonymous

"Now is the time to build businesses that have a huge impact. That means becoming successful and making a difference beyond philanthropy – it's about embedding values to build value." - Anonymous

"You can't watch and scan people when everyone is watching you." - Anonymous

"Write Like You Talk" - Anonymous

"Always be nice to everyone." - Anonymous

"Startups that look like a bad idea now and turn into something great later, because of a change in the world, are excellent opportunities for investors." - Anonymous

"Be super open-minded and go with the wind of innovation." - Anonymous

"Those who live by their wits go to work on roller coasters. The ride is exhilarating, but you need a stomach of titanium." - Anonymous

"Rule #1: There are no rules. Rule #2: Never forget rule #1." - Anonymous

"Bureaucracy has no place in an ideas company." - Anonymous

"Great work is done by obstinate donkey-men, not temperamental geniuses." - Anonymous

"If you asked an oracle the secret to doing great work and the oracle replied with a single word my bet would be on 'curiosity'" - Paul Graham

"It can take 20 years to build a reputation and 5 minutes to ruin it. If you think about that, you'll do things differently." - Warren Buffett

“Treat each quarter like a prototype of your future. Don’t be afraid to iterate and make adjustments in real-time. Flexibility in how you achieve your goals will help you adapt to unexpected challenges.” - Chat GPT`;

console.log(JSON.stringify(convertQuotes(rawQuotes), null, 2));

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
