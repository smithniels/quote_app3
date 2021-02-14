import React from "react";
import Quotes from "../Quotes.js";

/*
  What this component needs to do:
    1. Call the quotes array
    2. Randomize it
    3. Return it
*/

console.log(typeof Quotes);

export const Quotestwo = () => {
  const QuotesRand = Quotes.reverse(); //Quotes[Math.floor(Math.random() * Quotes.length)];

  if (Quotes.constructor.name === "Array") {
    console.log("that's an array!!!!"); // true
  }
  return QuotesRand;

  console.log(QuotesRand);
};

// console.log(Quotestwo);
// console.log(typeof Quotestwo); // function
// console.log(typeof Quotes); // object
// console.log("end");

export default Quotestwo;
