const quoteSpan = document.querySelector('#quote');
const authorSpan = document.querySelector('#author');
const btn = document.querySelector('.btn-outline-primary');

const quotes = [{
        author: 'author 1',
        quote: 'quote 1'
    },
    {
        author: 'author 2',
        quote: 'quote 2'
    },
    {
        author: 'author 3',
        quote: 'quote 3'
    },
    {
        author: 'author 4',
        quote: 'quote 4'
    },
];

const randomQuote = () => {
    let randomIndex = parseInt(Math.random() * quotes.length);
    console.log(quotes[randomIndex].author, quotes[randomIndex].quote);
    quoteSpan.innerHTML = quotes[randomIndex].quote;
    authorSpan.innerHTML = quotes[randomIndex].author;
}

btn.addEventListener('click', randomQuote);