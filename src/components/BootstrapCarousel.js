import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Quotes from "../Quotes.js";
// import Slidez from "../components/Slidez.js";
export class BootstrapCarousel extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid">
          <div className="row title" style={{ marginBottom: "20px" }}>
            <div class="col-sm-12 btn btn-warning">
              How To Use Bootstrap Carousel In ReactJS
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <Carousel>
            {Quotes.map((quote) => (
              <Carousel.Item
                style={{
                  color: "black",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    backgroundColor: "rgb(254, 215, 21)",
                    padding: "30px 200px",
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
