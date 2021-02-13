import React /* , { Component */ from "react";
// import Carousel from "react-bootstrap/Carousel";
import Quotes from "../Quotes.js";
// import { Link } from "react-router";

//stackoverflow.com/questions/38101522/how-to-render-random-objects-from-an-array-in-react./
console.log(typeof Quotes);
if (Quotes.constructor.name == "Array") {
  console.log("that's an array!!!!"); // true
}

console.log("it's an array");
console.log(Quotes, "Console logging before function");

export const Quotestwo = () => {
  const Quotestwo = Quotes[Math.floor(Math.random() * Quotes.length)];
  console.log(Quotestwo);
  console.log(Quotestwo, "Console logging after function");
  return Quotestwo;
};
console.log(Quotestwo);
console.log(typeof Quotestwo); // function
console.log(typeof Quotes); // object

export default Quotestwo;
// function RecommendedQuotes({ Quotes }) {
//   const shuffledQuotes = shuffleArray(Quotes);
//   return (
//     <ul>
//       {shuffledQuotes.map((post) => {
//         return (
//           <li key={post.id}>
//             <p>{post.title}</p>
//             <p>{post.text}</p>
//             <p>{post.category}</p>
//             {/* <Link to={`/blog/post-1/:${post.id}`}>Weiter lesen</Link> */}
//           </li>
//         );
//       })}
//     </ul>
//   );
// }

// RecommendedQuotes.propTypes = {
//   Quotes: React.PropTypes,
// };
// export default RecommendedQuotes;
