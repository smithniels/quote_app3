import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  .footer {
    margin-top: 2rem;
    padding: 1rem 0rem;
    background-color: #fed715;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
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
        <a
          href="https://smithniels.github.io/nsPortfolio/"
          target="_blank"
          rel="noreferrer"
        >
          Niels Smith
        </a>
      </p>
      ~~ {"\n"}
      <p> Data Analyst & Web Developer</p>
    </div>
  </Styles>
);

export default Footer;
