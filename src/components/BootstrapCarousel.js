import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Quotes from "../Quotes.js";
import Quotestwo from "./Randomizer.js";

class BootstrapCarousel extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <Carousel>
            {Quotes.map((quote) => (
              <Carousel.Item
                style={{
                  color: "black",
                  height: "90%",
                }}
              >
                <div
                  style={{
                    backgroundColor: "rgb(254, 215, 21)",
                    padding: "35px 70px",
                    border: "2px black solid",
                    borderRadius: "25px",
                  }}
                  key={quote.ID}
                >
                  <h1>"{quote.quote}"</h1>
                  <h5> - {quote.source}</h5>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    );
  }
}

export default BootstrapCarousel;
