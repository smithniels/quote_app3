import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  .footer {
    align-content: center;
    background-color: #fed715;
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    padding: 1rem 0rem;
    position: fixed;
    width: 100%;
    z-index: 10000;
  }

  a {
    color: black;
  }
  //
`;

const Footer = () => (
  <Styles>
    <div className="footer">
      <p>
        Created by Niels Smith
        <a
          href="https://smithniels.github.io/nsPortfolio/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          (Portfolio)
        </a>
      </p>
    </div>
  </Styles>
);

export default Footer;
