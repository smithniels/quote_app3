import React from "react";
// import { fadeIn } from "react-animations";
// import { StyleSheet, css } from "aphrodite";

function Header() {
  var stylesHeader = {
    margin: "0 auto",
    display: "flex",
    alignItems: "flex-end",
    // alignContent: "center",
    justifyContent: "center",
    width: "560px",
    height: "100px",
    backgroundColor: "#FED715",
    border: "black 2px solid",
    fontSize: "50px",
    flexDirection: "column",
    borderRadius: "25px",
    padding: "50px",
  };

  var siteLink = {
    background: "#FED715",
    borderRadius: "25px",
    textDecoration: "none",
    color: "black",
    border: "black 2px solid",
    padding: "25px",
  };

  var subHeader = {
    fontSize: "20px",
    fontStyle: "italic",
    justifyContent: "center",
  };
  return (
    <div className="container">
      <div style={stylesHeader}>
        <h2>Sometimes Quotable</h2>
        <span style={subHeader}>
          "Here's a handful of quotes I like" -niels
        </span>
      </div>
      <button style={siteLink}>
        <a
          href="https://smithniels.github.io/nsPortfolio/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <>My Portfolio Site</>
        </a>
      </button>
    </div>
  );
}

export default Header;
