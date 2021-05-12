import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import QuotesFilt from "./Filter.js";

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
              // /Users/ehiilmnsst / Documents / GitHub / quote_app3 / src / Quotes.js;
              // className="carousel-control-next-icon"
            >
              {QuotesFilt.map((quote) => (
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
