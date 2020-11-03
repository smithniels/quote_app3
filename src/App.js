// TODO: Figure out how to do separate line of text in the carousel
// TODO: Figure out how to randomize items in array
// TODO: Figure out how to add in clickable SourceLinks

import React from "react";
// import Quotes from "./Quotes.js";
import Header from "./components/Header.js";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BootstrapCarousel from "./components/BootstrapCarousel";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // id: 0,
    };
  }

  render() {
    return (
      <div className="App">
        <Header style={Headers.stylesHeader} />
        <BootstrapCarousel />
      </div>
    );
  }
}

export default App;
