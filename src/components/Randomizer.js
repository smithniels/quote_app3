import React from "react";
import Quotes from "../Quotes.js";
// FISHER-YATES Shuffle Algorithm

/*
  What this component needs to do:
    1. Call the quotes array
    2. Randomize it
    3. Return it
*/
const QuotesRand = {};

function shuffle(array) {
  let counter = array.length;
  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);
    // Decrease counter by 1
    counter--;
    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}
QuotesRand = shuffle(Quotes);

export default QuotesRand;
