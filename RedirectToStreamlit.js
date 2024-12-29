import React from "react";
import { FaStream } from "react-icons/fa"; // Optional icon

const RedirectToStreamlit = () => {
  const handleRedirect = () => {
    // Replace with your Streamlit app URL
    window.location.href = "http://localhost:8501";
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to My React App</h1>
      <p>Click the button below to open the Streamlit app:</p>
      <button
        onClick={handleRedirect}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        <FaStream style={{ marginRight: "10px" }} />
        Open Streamlit App
      </button>
    </div>
  );
};

export default RedirectToStreamlit;
