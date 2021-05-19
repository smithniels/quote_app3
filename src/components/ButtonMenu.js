import React from "react";
import styled from "styled-components";
import { Container, Col, Row } from "react-bootstrap";

const ButtonGroup = styled.div`
  display: flex;
`;

const Button = styled.button`
  background-color: #fed715;
  color: #1c1c1c;
  font-size: 12px;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 20px 0px;
  cursor: pointer;
`;

// function buttonMenu = () => {
// e.preventDefault()
// console.log("The button's been pressed!")
// }

export const ButtonMenu = () => {
  return (
    <div>
      <Container>
        <ButtonGroup>
          <Col>
            <Row>
              <Button>Comedy</Button>
              <Button>Movtivation</Button>
            </Row>
            <Row>
              <Button>Romance</Button>
              <Button>Big Brains</Button>
            </Row>
          </Col>
        </ButtonGroup>
      </Container>
    </div>
  );
};
