import React from "react";
import { Carousel } from "react-bootstrap";
import Quotes from "../Quotes.js";
import Quotestwo from "./Randomizer.js";

export const BootstrapCarousel = () => {
  // var QuotesB = Quotes[Math.floor(Math.random() * Quotes.length)]};
  // let QuotesB = Math.floor(Math.random() * Quotes.length);
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

//var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
