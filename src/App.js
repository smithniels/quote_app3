// TODO: Figure out how to do separate line of text in the carousel
// TODO: Figure out how to randomize items in array
// TODO: Figure out how to add in clickable SourceLinks inside the cards
// TODO: I need to learn more about React Hooks/life cycle components

import React from "react";
import Header from "./components/Header.js";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BootstrapCarousel from "./components/BootstrapCarousel.js";
import styled from "styled-components";

const Styles = styled.div`
  html {
    box-sizing: border-box;
    background-attachment: fixed;
    list-style-type: none;
    font-family: "Helvetica Neue", Quicksand, sans-serif;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-position: right top;
    padding: 0 auto;
  }

  *,
  ::before,
  ::after {
    box-sizing: inherit;
    list-style-type: none;
    text-decoration: none;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0) !important;
  }

  html,
  body {
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
  }

  .classic:before {
    content: "";
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -10;
  }
`
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
    };
  }

  render() {
    return (
      <Styles>
          <div className="App">
          <Header />
          <BootstrapCarousel />
        </div>
      </Styles>
    );
  }
}

export default App;
