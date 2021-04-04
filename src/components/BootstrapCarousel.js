import React from "react";
import { Carousel } from "react-bootstrap";
import QuotesRand from "./Randomizer.js";
import styled from "styled-components";

const Styles = styled.div`
  h5 {
    margin-bottom: 5%;
  }
`;

export const BootstrapCarousel = () => {
  return (
    <div>
      <Styles>
        <div className="container-fluid">
          <div>
            <Carousel
              fade
              // Keyboard functionality would be a nice addition!
              // keyboard="true"
              // keyboard
              // keyboard={true}

              // className="carousel-control-next-icon"
            >
              {QuotesRand.map((quote) => (
                <Carousel.Item>
                  <div key={quote.ID}>
                    <h1>"{quote.quote}"</h1>
                    <h5> - {quote.source}</h5>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </Styles>
    </div>
  );
};

//var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
