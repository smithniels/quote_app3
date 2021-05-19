import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  .footer {
    padding: 1rem 0rem;
    background-color: #fed715;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    z-index: 10000;
  }

  a {
    color: black;
  }
  //
`;
// // const Text = styled.Text`
// //   text-align: left;
// //   font-size: 20px;
// `;

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
