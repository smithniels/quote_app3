import React from "react";
import { Carousel } from "react-bootstrap";
import QuotesRand from "./Randomizer.js";

export const BootstrapCarousel = () => {
  return (
    <div>
      <div className="container-fluid">
        <Carousel>
          {QuotesRand.map((quote) => (
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
