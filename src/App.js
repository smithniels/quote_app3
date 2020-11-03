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
      id: 0,
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
