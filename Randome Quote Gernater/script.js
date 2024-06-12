var quotes = [
    "Seek knowledge from the cradle to the grave. - Prophet Muhammad",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Get busy living or get busy dying. - Stephen King",
    "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Life is short, and it is up to you to make it sweet. - Sarah Louise Delany",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "Dream big and dare to fail. - Norman Vaughan",
    "The greatest jihad is to battle your own soul, to fight the evil within yourself. - Prophet Muhammad",
    "Knowledge is the life of the mind. - Al-Kindi",
    "Patience is the key to relief. - Imam Ali",
    "The ink of the scholar is more sacred than the blood of the martyr. - Prophet Muhammad",
    "He who knows himself knows his Lord. - Ibn Arabi",
    "Do not grieve over what has passed unless it makes you work for what is about to come. - Ibn al-Qayyim",
    "The first step to knowledge is to know that we are ignorant. - Imam Ali",
    "The universe is not outside of you. Look inside yourself; everything that you want, you already are. - Rumi",
    "Verily, with hardship comes ease. - Quran 94:6",
    "The best richness is the richness of the soul. - Prophet Muhammad",
    "Be like the flower that gives its fragrance to even the hand that crushes it. - Ali ibn Abi Talib",
    "Do not grieve, anything you lose comes round in another form. - Rumi",
    "The highest form of wisdom is kindness. - The Talmud",
    "The heart is the sanctuary of God. - Ibn Arabi",
    "The believer does not taunt others, does not curse others, does not use profanity, and does not abuse others. - Prophet Muhammad",
    "A person is either your brother in faith or your equal in humanity. - Ali ibn Abi Talib",
    "Silence is the fence around wisdom. - The Talmud",
    "The strongest among you is the one who controls his anger. - Prophet Muhammad",
    "Trust in Allah, but tie your camel. - Proverb",
    "People are asleep, and when they die, they awaken. - Ali ibn Abi Talib",
    "Knowledge enlivens the soul. - Ibn Sina",
    "The truest wisdom is a resolute determination. - Napoleon Bonaparte",
    "In the middle of difficulty lies opportunity. - Albert Einstein",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "What you do, what you get. - Zayyan Mustafa",
    "Where there is love, there is life. - Mahatma Gandhi",
    "Love is composed of a single soul inhabiting two bodies. - Aristotle",
    "To love and be loved is to feel the sun from both sides. - David Viscott",
    "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope. - Maya Angelou",
    "Love is the only force capable of transforming an enemy into a friend. - Martin Luther King Jr.",
    "The best thing to hold onto in life is each other. - Audrey Hepburn",
    "We accept the love we think we deserve. - Stephen Chbosky",
    "To love oneself is the beginning of a lifelong romance. - Oscar Wilde",
    "Love is when the other person's happiness is more important than your own. - H. Jackson Brown Jr.",
    "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage. - Lao Tzu",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Do not be a slave to others when Allah has created you free. - Imam Ali ibn Abi Talib",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The harder the conflict, the greater the triumph. - George Washington",
    "Don't wait. The time will never be just right. - Napoleon Hill",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "Money is a terrible master but an excellent servant. - P.T. Barnum",
    "A wise person should have money in their head, but not in their heart. - Jonathan Swift",
    "Wealth consists not in having great possessions, but in having few wants. - Epictetus",
    "An investment in knowledge pays the best interest. - Benjamin Franklin",
    "The strongest among you is the one who controls his anger. - Prophet Muhammad",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Formal education will make you a living; self-education will make you a fortune. - Jim Rohn",
    "Financial freedom is available to those who learn about it and work for it. - Robert Kiyosaki",
    "Selfishness is not living as one wishes to live, it is asking others to live as one wishes to live. - Oscar Wilde",
    "Almost every sinful action ever committed can be traced back to a selfish motive. - John Piper",
    "Selfishness is the greatest curse of the human race. - William E. Gladstone",
    "Selfish persons are incapable of loving others, but they are not capable of loving themselves either. - Erich Fromm",
    "Attitude is a little thing that makes a big difference. - Winston Churchill",
    "Your attitude, not your aptitude, will determine your altitude. - Zig Ziglar",
    "People may hear your words, but they feel your attitude. - John C. Maxwell",
    "Excellence is not a skill. It is an attitude. - Ralph Marston",
    "The best among you are those who have the best manners and character. - Prophet Muhammad",
    "Knowledge without action is useless and action without knowledge is futile. - Imam al-Ghazali",
    "The only disability in life is a bad attitude. - Scott Hamilton",
    "Study is not the main thing; doing is. - Rabbi Isaac Luria",
    "Weakness of attitude becomes weakness of character. - Albert Einstein",
    "A positive attitude causes a chain reaction of positive thoughts, events, and outcomes. - Wade Boggs",
    "Attitude is everything, so pick a good one. - Wayne Dyer",
    "If you don't like something, change it. If you can't change it, change your attitude. - Maya Angelou",
    "The greatest discovery of all time is that a person can change his future by merely changing his attitude. - Oprah Winfrey",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "Opportunities don't happen, you create them. - Chris Grosser",
    "A person who is grateful for the little things is the one who is deserving of the big things. - Ibn Qayyim Al-Jawziyya",
    "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
    "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
    "The pen is the tongue of the mind. - Ibn Taymiyyah",
    "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
    "Success seems to be connected with action. Successful people keep moving. They make mistakes, but they don't quit. - Conrad Hilton",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
    "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "A man's true wealth is the good he does in this world. - Prophet Muhammad",
    "Happiness depends upon ourselves. - Aristotle",
    "For every minute you are angry you lose sixty seconds of happiness. - Ralph Waldo Emerson",
    "Happiness is not a goal, it is a by-product. - Eleanor Roosevelt",
    "Do not be satisfied with the stories that come before you. Unfold your own myth. - Rumi",
    "The most important thing is to enjoy your life - to be happy - it is all that matters. - Audrey Hepburn",
    "Happiness is when what you think, what you say, and what you do are in harmony. - Mahatma Gandhi",
    "There is only one happiness in this life, to love and be loved. - George Sand",
    "Happiness is the secret to all beauty. There is no beauty without happiness. - Christian Dior",
    "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared. - Buddha",
    "The only true wisdom is in knowing you know nothing. - Socrates",
    "Turn your wounds into wisdom. - Oprah Winfrey",
    "When you seek advice, do not withhold any information. - Prophet Muhammad",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "Wisdom is not a product of schooling but of the lifelong attempt to acquire it. - Albert Einstein",
    "Knowledge speaks, but wisdom listens. - Jimi Hendrix",
    "He who learns but does not think, is lost! He who thinks but does not learn is in great danger. - The Talmud",
    "Wisdom is the reward you get for a lifetime of listening when you would rather have talked. - Mark Twain"
];


var displayButton = document.getElementById("button");
var quoteDisplay = document.getElementById("hasan");
var regenerateButton = document.getElementById("regenerate");

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

displayButton.addEventListener('click', function() {
    var randomQuote = getRandomQuote();
    quoteDisplay.innerText = randomQuote;
    displayButton.style.display = "none";
    regenerateButton.style.display = "inline-block";
    quoteDisplay.classList.remove('animate__fadeIn');
    void quoteDisplay.offsetWidth; // Restart animation
    quoteDisplay.classList.add('animate__fadeIn');
});

regenerateButton.addEventListener('click', function() {
    var randomQuote = getRandomQuote();
    quoteDisplay.innerText = randomQuote;
    quoteDisplay.classList.remove('animate__fadeIn');
    void quoteDisplay.offsetWidth; // Restart animation
    quoteDisplay.classList.add('animate__fadeIn');
});