// TODO: Figure out how to do separate line of text in the carousel
// TODO: Figure out how to add in clickable SourceLinks inside the cards
// TODO: I need to learn more about React Hooks/life cycle components

import React from "react";
import Header from "./components/Header.js";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BootstrapCarousel } from "./components/BootstrapCarousel.js";
import styled from "styled-components";
import { Container, Col, Row } from "react-bootstrap";

const Styles = styled.div`
  :root {
    --color-primary: #fed715;
  }

  html {
    box-sizing: border-box;
    background-attachment: fixed;
    list-style-type: none;
    font-size: calc(10px + 2vmin);
    font-family: "Helvetica Neue", Quicksand, sans-serif;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-position: right top;
    background-color: #f5f5f5;
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

  body:before {
    content: "";
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -10;
    ${
      "" /* background-image: url("https://picsum.photos/1200/900?grayscale"); */
    }
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-position: top;
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

  .mainBit { 
    color: purple;
    border-top: 2px solid #fed715;
    
    margin-top: 2%;
  }

`;

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
        <div className="mainBit">
          <Container>
            <Col>
              <Row>
                <Header />
              </Row>
              <Row>
                <BootstrapCarousel />
              </Row>
            </Col>
          </Container>
        </div>
      </Styles>
    );
  }
}

export default App;
