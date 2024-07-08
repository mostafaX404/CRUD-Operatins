var loc = document.getElementById("loc");

var quotes = [
  {
    quote: `"Be yourself; everyone else is already taken."`,
    name: `-- Oscar Wilde `,
  },
  {
    quote: `"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."`,
    name: `-- Marilyn Monroe `,
  },

  {
    quote: `"A room without books is like a body without a soul."`,
    name: `-- Marcus Tullius Cicero `,
  },
];

function generateQuote() {
  var index = Math.floor(Math.random() * quotes.length);

  box = ` ${quotes[index].quote} \n ${quotes[index].name} `;
  loc.innerHTML = box;
}
