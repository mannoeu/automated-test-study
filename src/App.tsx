import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("#ffffff");

  const handleChangeColor = (event: React.ChangeEvent<HTMLInputElement>) =>
    setColor(event.target.value);

  return (
    <main>
      <label
        id="color"
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 16,
          fontWeight: 700,
        }}
      >
        Select color
        <input
          aria-labelledby="color"
          aria-label="color"
          type="color"
          value={color}
          onChange={handleChangeColor}
        />
      </label>
      <article
        style={{
          width: 200,
          height: 200,
          margin: "20px auto 0",
          display: "grid",
          placeItems: "center",
          border: "1px solid #000",
          background: color,
        }}
      ></article>
    </main>
  );
}

export default App;
