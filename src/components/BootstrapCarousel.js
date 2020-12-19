import React, { Component } from "react";
import {Carousel} from "react-bootstrap";
import Quotes from "../Quotes.js";
import Quotestwo from "./Randomizer.js";

export const BootstrapCarousel = () => {
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
                    padding: "35px 120px",
                    border: "2px black solid",
                    borderRadius: "25px",
                    width: "800px",
                    minWidth: "800px",
                    maxWidth: "800px",
                    height: "100%",
                    minHeight: "200px",
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


