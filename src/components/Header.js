import React from "react";
import styled from "styled-components";

const Styles = styled.div`

    :root {
      --color-primary: #fed715;
  }

    .header{
      margin: 0 auto,
      display: flex,
      alignItems: center,
      justifyContent: center,
      width: 60%,
      height: 150px,
      backgroundColor: #FED715,
      border: black 2px solid,
      fontSize: 50px,
      flexDirection: column,
      borderRadius: 25px,
      padding: 50px,
      margin-top:;
;
}

  .subHeader{
    font-size: 15px;
    font-style:i italic;
    display: flex;
    justify-content: center;
    color:  --color-primary;
    border-bottom: #fed715 5px solid;
    margin-bottom:10%;
  }
  }
  

@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
    .header{
      padding: auto;
      margin: auto 0;
      height:150px;
      color:pink;
    }
    .subheader{
      color:purple;
    }
  }

`;
const Header = () => {
  return (
    <Styles>
      <div className="header">
        <h2>Sometimes Quotable!</h2>
        <h5 className="subHeader">
          "Here's a handful of quotes I like" -niels
        </h5>
      </div>
    </Styles>
  );
};

export default Header;
