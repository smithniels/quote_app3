// Filter randomized quotes array by selection

import QuotesRand from "../Randomizer.js";

function filt(array) {
  // Take array and filter
  let motivCheck = QuotesRand.filter((quote) => quote.comedy === true);

  return array;
}
var QuotesFilt = filt(QuotesRand);

export default QuotesFilt;
