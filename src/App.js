// TODO: Figure out how to do separate line of text in the carousel i.e. "how to hit enter without ruining everything"
// TODO: Figure out how to add in clickable SourceLinks inside the cards
// TODO: I need to learn more about React Hooks/life cycle components
// TODO: Use filter.array() to filter results --> Create a menu/button afterwards!
// TODO: Switch to single large quotation mark

import React from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import "./App.css";
import { BootstrapCarousel } from "./components/BootstrapCarousel.js";
import styled from "styled-components";
import { Container, Col, Row } from "react-bootstrap";

const Styles = styled.div`
  html {
    background-color: #f5f5f5;
    background-position: right top;
    background-size: cover;
    box-sizing: border-box;
    background-attachment: fixed;
    font-size: calc(10px + 2vmin);
    padding: 0 auto;
    list-style-type: none;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
  }

  *,
  ::before,
  ::after {
    box-shadow: 0 0 1px rgba(0, 0, 0, 0) !important;
    box-sizing: inherit;
    list-style-type: none;
    text-decoration: none;
  }

  html,
  body {
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
  }

  body:before {
    background-image: url("https://picsum.photos/1200/900?grayscale"); 
    background-size: cover;
    background-position: top;
    content: "";
    display: block;
    height: 100%;
    left: 0;
    top: 0;
    position: fixed;
    width: 100%;
    z-index: -10;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
  }

  .classic:before {
    content: "";
    display: block;
    height: 100%;
    left: 0;
    top: 0;
    position: fixed;
    width: 100%;
    z-index: -10;
  }

  .mainBit { 
    border: 1.8px solid #fed715;
    color: #1c1c1c; ;
    padding: 2%;
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
        <Col>
          <Header />
          <div className="mainBit">
            <Container fluid>
              <Col>
                <Col>
                  <Row></Row>
                  <Row>
                    <BootstrapCarousel />
                  </Row>
                </Col>
                <Footer />
              </Col>
            </Container>
          </div>
        </Col>
      </Styles>
    );
  }
}

export default App;
