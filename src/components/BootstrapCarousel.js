import React from "react";
import { Carousel } from "react-bootstrap";
import QuotesRand from "./Randomizer.js";
import styled from "styled-components";

const Styles = styled.div``;

export const BootstrapCarousel = () => {
  return (
    <div>
      <Styles>
        <div className="container-fluid">
          <Carousel
            style={{
              color: "black",
              height: "50%",
              fontSize: "1px",
            }}
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
      </Styles>
    </div>
  );
};

//var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
