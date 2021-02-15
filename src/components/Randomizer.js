// FISHER-YATES Shuffle Algorithm

import Quotes from "../Quotes.js";
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
  // console.log(array);
  return array;
}
var QuotesRand = shuffle(Quotes);
export default QuotesRand