import React from "react";
import styled from "styled-components";

const Styles = styled.div`
    .header{
      margin: 0 auto,
      display: flex,
      alignItems: center,
      justifyContent: center,
      width: 50%,
      height: 100px,
      backgroundColor: #FED715,
      border: black 2px solid,
      fontSize: 50px,
      flexDirection: column,
      borderRadius: 25px,
      padding: 50px,
}

  .subHeader{
    font-size:15px;
    font-style:italic;
    display:flex;
    justify-content:center;
  }

@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
    .header{
      padding: auto;
      margin: auto 5px;
      height:150px;
    }


  }

`;
const Header = () => {
  return (
    <div>
      <div className="header">
        <h2>Sometimes Quotable</h2>
        <h5 className="subHeader">
          "Here's a handful of quotes I like" -niels
        </h5>
      </div>
    </div>
  );
};

export default Header;
