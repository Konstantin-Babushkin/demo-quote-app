import React, { useState } from "react";
import "./App.css";
import twitterLogo from "./icons8-twitter-30.png";

function App(props) {
  const [quote, setQuote] = useState(
    props.allQuotes[Math.floor(Math.random() * props.allQuotes.length)]
  );

  const handleClick = () => {
    console.log("button clicked");
    setQuote(
      props.allQuotes[Math.floor(Math.random() * props.allQuotes.length)]
    );
  };

  return (
    <div id="mainContainer">
      <div id="title-container">
        <h1>Э.Х. Галшиев - Бэлигэй Толи</h1>
        <h2>E.H. Galshiev - The Book of Wisdom</h2>
      </div>

      <div id="quote-box">
        <p id="text">{quote.quoteText}</p>
        <small id="source">{quote.source}</small>
        <div id="btn-container">
          <button class="btn" id="share">
            <a
              id="tweet-quote"
              title="Tweet this quote"
              target="_top"
              href={`https://twitter.com/intent/tweet?hashtag=quotes&related=buryat&text=${quote.quoteText}`}
            >
              <img src={twitterLogo} alt="twitter-logo" />
            </a>
          </button>
          <button id="new-quote" class="btn" onClick={handleClick}>
            Next
          </button>
        </div>
      </div>
      <small id="credits">Developed by Konstantin Babushkin</small>
    </div>
  );
}

export default App;
