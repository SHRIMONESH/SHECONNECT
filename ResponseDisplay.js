// src/components/ResponseDisplay.js
import React from "react";

const ResponseDisplay = ({ answer }) => {
  return (
    <div>
      <h3>Response:</h3>
      <p>{answer}</p>
    </div>
  );
};

export default ResponseDisplay;
