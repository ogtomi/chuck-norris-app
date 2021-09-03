import React, { useState } from "react";
import Card from "./Card";

const N = 10;
var cards = Array(N).fill(<Card />);

const App = () => {
  const [bottom, setBottom] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY + window.innerHeight > document.body.offsetHeight) {
      if (!bottom) {
        const newJokesArr = Array(N).fill(<Card />);
        cards.push(newJokesArr);
      }
      setBottom(true);
    } else {
      setBottom(false);
    }
  };

  window.addEventListener("scroll", scrollHandler);

  return <div>{cards}</div>;
};

export default App;
