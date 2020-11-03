import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Quotes from "../Quotes.js";
import Quotestwo from "./Randomizer.js";

class BootstrapCarousel extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row title" style={{ marginBottom: "20px" }}>
            <div className="col-sm-12 btn btn-warning">
              <h2>
                Text Will Go Here If Biden Wins This Week If Not Then Massive
                Depression...
              </h2>
            </div>
          </div>
        </div>
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
                    padding: "20px 100px",
                  }}
                  key={quote.ID}
                >
                  <h1>"{quote.quote}"</h1>
                  <h5> - {quote.source}</h5>
                  {/* broken for now */}
                  {/* <h6>
                    <a href={quote.sourceLink} style={{ zIndex: "101" }}>
                      Text
                    </a>
                  </h6> */}
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
