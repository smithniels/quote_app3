import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Quotes from "../Quotes.js";
import { Link } from "react-router";

console.log(Quotes.length);
function Quotestwo(Quotes) {
  console.log(Quotes.length);
  let i = Quotes.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = Quotes[i];
    Quotes[i] = Quotes[j];
    Quotes[j] = temp;
  }
  return Quotes;
}
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
