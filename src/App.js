import React from "react";
// import Quotes from "./Quotes.js";
import Header from "./components/Header.js";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slidez from "./components/Slidez";
import { Button } from "react-bootstrap";

import BootstrapCarousel from "./components/BootstrapCarousel";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
    };
  }

  render() {
    return (
      <div className="App">
        <Header style={Headers.stylesHeader} />
        <BootstrapCarousel></BootstrapCarousel>
        {/* <Button variant="success">I do nothing, and that's okay!</Button> */}
        {BootstrapCarousel}
        {/* {Slidez} */}
      </div>
    );
  }
}

export default App;
