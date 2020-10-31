import React from "react";
import Slider from "react-slick";
import Quotes from "../Quotes.js";

function Slidez() {
  const settings = {
    className: "slides variable-width center",
    infinite: true,
    speed: 1300,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    pauseOnHover: true,
    centerMode: true,
    variableWidth: true,
    // adaptiveHeight: true,
    focusOnSelect: true,
    swipeToSlide: true,
  };

  return (
    <div>
      <div className="theSlider ">
        <Slider {...settings}>
          {Quotes.map((quote) => (
            <div key={quote.ID}>
              <h1>"{quote.quote}"</h1>
              <h5> - {quote.source}</h5>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Slidez();
