import React from "react";
import { Carousel } from "react-bootstrap";
import { QuotesRand } from "./Randomizer.js";
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
              // Keyboard functionality would be a nice addition!
              // keyboard="true"
              // keyboard
              // keyboard={true}

              // /Users/ehiilmnsst / Documents / GitHub / quote_app3 / src / Quotes.js;
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
            {/* not sure if this is how to add in an hr in react. I don't know why it wouldn't work though. I'll have to Google it when I have the chance! - Niels in a plane over the Atlantic */}
            <hr />
            <Carousel
              fade
              // Keyboard functionality would be a nice addition!
              // keyboard="true"
              // keyboard
              // keyboard={true}

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
