var Quotes = [
    {
    'quote': 'Be yourself; everyone else is already taken',
    'author':'Oscar Wilde'
    },
    { 
    'quote': ' Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe',
    'author':'Albert Einstein'
    },
    {
    'quote': 'So many books, so little time',
    'author':'Frank Zappa'
    },
    {
    'quote': 'A room without books is like a body without a soul',
    'author':'Marcus Tullius Cicero'
    },
    { 
    'quote': 'Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.',
    'author':'Bernard M. Baruch'
    },
    {
    'quote': 'You\'ve gotta dance like there\'s nobody watching Love like you\'ll never be hurt Sing like there\'s nobody listening And live like it\'s heaven on earth.',
    'author':'William W. Purkey'
    },
    {
    'quote': 'You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.',
    'author':'Dr. Seuss'
    },
    {
    'quote': 'You only live once, but if you do it right, once is enough.',
    'author':'Mae West'
    },
    {
    'quote': 'Be the change that you wish to see in the world.',
    'author':'Mahatma Gandhi'
    },
    {
    'quote': 'In three words I can sum up everything I\'ve learned about life: it goes on',
    'author':'Robert Frost'
    },
];

function RandomQuote() {
    var random = Math.floor(Math.random() * Quotes.length);
    document.getElementById('quote').textContent = `\"${Quotes[random].quote}\"`;
    document.getElementById('author').textContent = `--${Quotes[random].author}`;
}
