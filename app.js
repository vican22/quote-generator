const newQuoteButton = document.querySelector(".new-quote");
const endpoint = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

const getQuote = () => {
  fetch(endpoint)
    .then(res => res.json())
    .then(data => displayQuote(data.message))
    .catch(() => console.log("An error occured"));

  //console.log("newQuoteButton was clicked");
};

const displayQuote = quote => {
  const quoteText = document.querySelector(".quote-text");
  quoteText.textContent = quote;

  const tweetButton = document.querySelector(".tweet");
  tweetButton.setAttribute(
    "href",
    `https://twitter.com/share?text=${quote}-Donald_Trump`
  );
};

// const getQuote = () => {
//   fetch(endpoint).then(res => console.log(res.json()));
// };

newQuoteButton.addEventListener("click", getQuote);
getQuote();
