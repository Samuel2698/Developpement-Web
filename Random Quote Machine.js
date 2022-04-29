import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const quoteData = [
  {text: `“Not how long, but how well you have lived is the main thing.”`, author: `"Seneca"`},
  {text: ` “The unexamined life is not worth living.”`, author: `"Socrates"`},
  {text: `“I like criticism. It makes you strong.”`, author: `"LeBron James"`},
  {text: `“Life is a flower of which love is the honey.”`, author: `"Victor Hugo"`},
  {text: ` “Health is the greatest gift, contentment the greatest wealth, faithfulness the best      relationship.”`, author: `"Buddha"`},
  {text: `“Good friends, good books, and a sleepy conscience: this is the ideal life.”`, author: `"Mark Twain"`},
  {text: `“It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you’ll do things differently.”`, author: `"Warren Buffett"`},
  {text: `“The more man meditates upon good thoughts, the better will be his world and the world at large.”`, author: `"Confucius"`},
  {text: `“Never take life seriously. Nobody gets out alive anyway.” `, author: `"Anonymous"`},
  {text: `“If you love life, don’t waste time, for time is what life is made up of.”`, author: `"Bruce Lee"`},
];

const QuoteBox = ( {quote, handleNewQuote} ) => (
  <div id="quote-box">
    
    <p id="text">{quote.text}</p>
    <h2 id="author">{quote.author}</h2>
  
    <div class="actions">
      
      <button
       id="new-quote"
       class="button"
        onClick={handleNewQuote}
        >
        New Quote
      </button>
      
      <a
        href="https://twitter.com/intent/tweet"
        id="tweet-quote"
        target="_blank"
        >
        Tweet
      </a>
      
    </div>
  </div>
);

const getRandomIndex = () =>
  Math.round(Math.random() * ((quoteData.length - 1) - 0) + 0);

const App = () => {
  const [quote, setQuote] = React.useState(quoteData[getRandomIndex()])
  const handleNewQuote = () => {
    setQuote(quoteData[getRandomIndex()])
  }
  
  return(
  <div class="main">
    <QuoteBox quote={quote} handleNewQuote={handleNewQuote}/>
  </div>
  )
 }

ReactDOM.render(<App/>, document.querySelector("#app"));