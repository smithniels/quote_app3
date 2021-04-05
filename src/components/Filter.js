// Filter randomized quotes array by selection

import QuotesRand from "./Randomizer.js";

function filt(array) {
  // Take array and filter
  QuotesRand.filter((quote) => quote.comedy === true);
  console.log(array);
  return array;
}

var QuotesFilt = filt(QuotesRand);

// console.log(QuotesFilt);

// export default QuotesFilt;
