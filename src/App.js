// TODO: Figure out how to do separate line of text in the carousel
// TODO: Figure out how to add in clickable SourceLinks inside the cards
// TODO: I need to learn more about React Hooks/life cycle components
// TODO: Use filter.array() to filter results --> Create a menu/button afterwards!
// TODO: Switch to single large quotation mark

import React from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BootstrapCarousel } from "./components/BootstrapCarousel.js";
import styled from "styled-components";
import { Container, Col, Row } from "react-bootstrap";
// import { QuotesFilt } from "./components/Filter.js";

const Styles = styled.div`
${"" /* I don't think this actually does anything... */}
  :root {
    --color-primary: #fed715;
  }

  html {
    box-sizing: border-box;
    background-attachment: fixed;
    list-style-type: none;
    font-size: calc(10px + 2vmin);
    /*font-family: "Helvetica Neue", sans-serif !important;*/
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
    color: #1c1c1c; ;
    border: 1.8px solid #fed715;
    padding:2%;
    ${"" /* margin:3% 9%; */}
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
                  <Row>
                    <BootstrapCarousel />
                    {/* <QuotesFilt /> */}
                  </Row>
                </Col>

                <Footer />
              </Col>
            </Container>
          </div>{" "}
        </Col>
      </Styles>
    );
  }
}

export default App;
