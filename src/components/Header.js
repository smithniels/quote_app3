import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  .header{
    margin-bottom:1.4rem
    display: flex,
    align-items: center,
    width: 80%,
    background-color: #fed715;
    border: black 2px solid,
    font-size: 50px !important, 
    z-index:5;
    border-radius: 25px,
    padding: 30vmin 1rem;
    padding-top:50px;
    justify-content: center;
}

  .subHeader{
    font-size: 15px;
    font-style:i italic;
    display: flex;
    justify-content: center;
    border-bottom: #fed715 5px solid;
    border-radius: 5px 20px 5px;
    margin-bottom:10%;
  }

  h2{
    display:flex;
    justify-content:center;
  }
}


@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
    .header{
      padding: auto;
      margin: auto 0;
      height:150px;
      color:pink;

    }
  }

`;
const Header = () => {
  return (
    <Styles>
      <div className="header" sticky>
        <h2>Sometimes Quotable!</h2>
        <h5 className="subHeader">
          "Here's a handful of quotes I enjoy" niels
        </h5>
      </div>
    </Styles>
  );
};

export default Header;
