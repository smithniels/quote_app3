import React from "react";
import { Carousel } from "react-bootstrap";
import Quotes from "../Quotes.js";
import PropTypes from "prop-types";

// https://stackoverflow.com/questions/38101522/how-to-render-random-objects-from-an-array-in-react

// export const BootstrapCarousel = () => {
function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class Shuffle extends React.Component {
  render() {
    const shuffdArray = shuffleArray(this.props.Quotes);
    return (
      <div>
        <Carousel>
          {shuffdArray.map(Quotes)}
          <Carousel.Item
            style={{
              color: "black",
              height: "50%",
            }}
          >
            <div key={Quotes.ID}>
              <h1>"{Quotes.quote}"</h1>
              <h5> - {Quotes.source}</h5>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

// Shuffle.propTypes = {
//   Quotes: React.PropTypes.array,
// };
export default Shuffle;

// Shuffle.propTypes = {
//   posts: React.PropTypes.array,
// };

// function randQuote({ Quotes }) {
//   const shuffArray = shuffleArray(Quotes);
//   return (
//     <div>
//       {shuffArray.map((quote) } => {
//         return (
//             <Carousel.Item
//                   style={{
//                     color: "black",
//                     height: "50%",
//                   }}
//                 >
//                 <div key={quote.ID}>
//                   <h1>"{quote.quote}"</h1>
//                   <h5> - {quote.source}</h5>
//                 </div>
//               </Carousel.Item>
//               text
//     </div>
//   )
//   }
//   }

/* }

  return (
    <div>
      <div className="container-fluid">
        <Carousel>
          {Quotes.map((quote) => (
            <Carousel.Item
              style={{
                color: "black",
                height: "50%",
              }}
            >
              <div key={quote.ID}>
                <h1>"{quote.quote}"</h1>
                <h5> - {quote.source}</h5>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
// function RecommendedPosts({ posts })
{
  // const shuffledPosts = shuffleArray(posts);
  return (
    <ul>
      {shuffledPosts.map((post) => {
        return (
          <li key={post.id}>
            <p>{post.title}</p>
            <p>{post.text}</p>
            <p>{post.category}</p>
            <Link to={`/blog/post-1/:${post.id}`}>Weiter lesen</Link>
          </li>
        );
      })}
    </ul>
  );
} */
