import React from "react";

function Quotify(props) {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#E2F0CB",
          border: "2px solid black",
          margin: 50,
          borderRadius: 10,
          paddingLeft: 20,
          paddingRight: 20,
          display: "flex",
          flexDirection: "column",
          minWidth: 550,
          maxWidth: 600,
          lineHeight: 1.75,
        }}
      >
        <h3 style={{ fontSize: 25, marginBottom: 0 }}> "{props.quote}" </h3>
        <h5 style={{ fontSize: 18 }}> - {props.source} </h5>
        <hr></hr>
      </div>
    </div>
  );
}

export default Quotify;
