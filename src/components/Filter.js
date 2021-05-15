import QuotesRand from "./Randomizer.js";

const Motivation = QuotesRand.filter((quote) => quote.motive === true);
const Lols = QuotesRand.filter((quote) => quote.comedy === true);
const Romance = QuotesRand.filter((quote) => quote.romantic === true);
const Bbrain = QuotesRand.filter((quote) => quote.bigBrain === true);

function Filt(array) {
  QuotesRand.filter((quote) => quote.romantic === true);
  console.log(array);
  return array;
}

var QuotesFilt = Filt(QuotesRand);

export default QuotesFilt;
