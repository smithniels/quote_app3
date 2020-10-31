import React from "react";
// import Quotes from "./Quotes.js";
import Header from "./components/Header.js";
import "./App.css";
// React-Slick carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slidez from "./components/Slidez";
// React-Bootcamp carousel
// import BootstrapCaro from "./components/BootstrapCaro.js";
import { Button } from "react-bootstrap";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // quoties: Quotes,
      id: 0,
    };
  }

  render() {
    return (
      <div className="App">
        <Header style={Headers.stylesHeader} />
        <Button variant="success">I do nothing, and that's okay!</Button>
        {/* {BootstrapCaro} */}
        {Slidez}
      </div>
    );
  }
}

export default App;
