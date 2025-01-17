const quotes = [
  { name: "Stephen King", quotes: "Get busy living or get busy dying" },
  {
    name: "John F.Kennedy",
    quotes: "Those who dare to fail misearably can achieve greatness",
  },
  {
    name: "Abraham Lincoln",
    quotes:
      "I'm a success today because i had a friend who believed in me and I didn't have the heart to let him down",
  },
  {
    name: "Leonardo Da Vinci",
    quotes:
      "It has long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things",
  },
  { name: "Leo Tolstoy", quotes: "If you want to be happy, be!" },
];

const quoteBtn = document.querySelector("#quoteBtn");
const quoteAuthor = document.querySelector("#quoteAuthor");
const quote = document.querySelector("#quote");

quoteBtn.addEventListener("click", displayQuote);

function displayQuote() {
  let number = Math.floor(Math.random() * quotes.length);
  quoteAuthor.innerHTML = quotes[number].name;
  quote.innerHTML = quotes[number].quotes;
}
