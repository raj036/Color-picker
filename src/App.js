import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [selectedColor, setSelectedColor] = useState("#000000");

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Color Picker</h1>
      <input
        type="color"
        value={selectedColor}
        onChange={handleColorChange}
        style={{
          cursor: "pointer",
          width: "50px",
          height: "50px",
          border: "none",
        }}
      />
      <p>
        Selected Color:{" "}
        <span
          style={{
            fontWeight: "bold",
            color: selectedColor,
            textShadow: "1px 1px 2px gray",
          }}
        >
          {selectedColor}
        </span>
      </p>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: selectedColor,
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      ></div>
    </div>
  );
};

export default App;
