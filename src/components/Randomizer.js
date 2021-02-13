import React /* , { Component */ from "react";
import Quotes from "../Quotes.js";
// import { Link } from "react-router";
//stackoverflow.com/questions/38101522/how-to-render-random-objects-from-an-array-in-react./
/*
// What this component needs to do:
   1. Call the quotes Array
   2. Randomize it
   3. Return it
*/

console.log(typeof Quotes);
if (Quotes.constructor.name === "Array") {
  console.log("that's an array!!!!"); // true
}
export const Quotestwo = () => {
  const Quotestwo = Quotes[Math.floor(Math.random() * Quotes.length)];
  console.log(Quotestwo);
  console.log(Quotestwo, "Console logging after function");
  return Quotestwo;
};

console.log(Quotestwo);
console.log(typeof Quotestwo); // function
console.log(typeof Quotes); // object
console.log("end");

export default Quotestwo;
