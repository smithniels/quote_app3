import React from "react";
import styled from "styled-components";

const ButtonGroup = styled.div`
  display: flex;
`;

const Button = styled.button`
  background-color: #fed715;
  color: #1c1c1c;
  font-size: 15px;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

// function buttonMenu = () => {
// e.preventDefault()
// console.log("The button's been pressed!")
// }

export const ButtonMenu = () => {
  return (
    <div>
      <ButtonGroup>
        <Button /*buttonMenu*/>Comedy</Button>
        <Button /*buttonMenu*/>Movtivation</Button>
        <Button /*buttonMenu*/>Romance</Button>
        <Button /*buttonMenu*/>Big Brains</Button>
      </ButtonGroup>
    </div>
  );
};