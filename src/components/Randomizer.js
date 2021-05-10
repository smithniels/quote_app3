// FISHER-YATES Shuffle Algorithm
// User: CoolAJ86
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// Thanks! 😬
// /Users/ehiilmnsst / Documents / GitHub / quote_app3 / src / Quotes.js;
import Quotes from "../Quotes.js";

function shuffle(array) {
  let counter = array.length;
  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);
    console.log("this is from the Randomizer.js");
    console.log(index); // just curious - ns
    // Decrease counter by 1
    counter--;
    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

var QuotesRand = shuffle(Quotes);

export default QuotesRand;
