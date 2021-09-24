import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  .header{
    align-items: center;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    background-color: #fed715;
    border: black 2px solid;
    font-size: 50px !important; 
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
    justify-content: center;
    font-size: 15px;
    font-style: italic;
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
        <h5 className="subHeader">"A list of quotes for you peruse" -niels</h5>
      </div>
    </Styles>
  );
};

export default Header;
