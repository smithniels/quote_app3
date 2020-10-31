import React from "react";
import Quotes from "../Quotes.js";
import Carousel from "react-bootstrap/Carousel";

function BootstrapCaro() {
  const caroCard = {};
  return (
    <div>
      {Quotes.map((quote) => (
        <Carousel>
          <Carousel.Item className="d-block w-100">
            {"what "}
            <img
              src="https://picsum.photos/500/200/?blur.jpg"
              alt="randomly generated placeholder"
              style={{ justifyContent: "center" }}
            ></img>
            key={quote.ID}><h1>"{quote.quote}"</h1>
            <h2> - {quote.source}</h2>
          </Carousel.Item>
        </Carousel>
      ))}
      {/* <Carousel>
        <Carousel.Item className="d-block w-100"></Carousel.Item>
        <Carousel.Item className="d-block w-100">text2 text text</Carousel.Item>
        <Carousel.Item className="d-block w-100">
          text3 why won't you love me?????
        </Carousel.Item>
      </Carousel> */}
    </div>
  );
}

export default BootstrapCaro();
