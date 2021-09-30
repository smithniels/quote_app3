import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  .header{
    align-items: center;
    background-color: #fed715;
    border: black 2px solid;
    border-radius: 25px;
    display: flex;
    font-size: 50px !important; /* does this make a difference? */
    justify-content: center;
    padding: 30vmin 1rem;
    padding-top:30px;
    margin-bottom:1.4rem;
    width: 80%;
    z-index:5;
}

  .subHeader{
    border-bottom:5px solid #fed715;
    border-radius: 5px 20px 5px;
    display: flex;
    font-size: 15px;
    font-style: italic;
    justify-content: center;
    margin-bottom:10%;
  }

  h2{
    display:flex;
    justify-content:center;
  }
}


@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
    .header{
      color: pink;
      height:150px;
      margin: auto 0;
      padding: auto;
    }
  }
`;

const Header = () => {
  return (
    <Styles>
      <div className="header" sticky>
        <h2>Sometimes Quotable!</h2>
        <h5 className="subHeader">"A list of quotes for you peruse" -niels</h5>
      </div>
    </Styles>
  );
};

export default Header;
