import React from "react";
import "../App.css";

function LoadingPage() {
  return (
    <div
      style={{
        minHeight: "90vh",
        padding: "13vw 11.45vw 11.45vw 11.45vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="spinner">
        <div className="loading"></div>
      </div>
    </div>
  );
}

export default LoadingPage;
