import React from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import QuotesFilt from "./Filter.js";

const Styles = styled.div`
  h5 {
    margin-bottom: 5%;
  }

  .carousel-control-next,
  .carousel-control-prev {
    filter: invert(100%);
    opacity: 40%;
  }

  Carousel.Item {
    color: red;
  }

  .mark {
    font-size: calc(12px + 2vmin);
  }

  .Test {
    color: red !important;
  }
`;

export const BootstrapCarousel = () => {
  return (
    <div>
      <Styles>
        <div className="container-fluid">
          <div>
            <Carousel fade class="Test">
              {QuotesFilt.map((quote) => (
                <Carousel.Item>
                  <div key={quote.ID}>
                    <h1>"{quote.quote}</h1>
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
