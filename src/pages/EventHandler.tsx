import React, { useState } from "react";

function EventHandler() {
  const [inputValue, setInputValue] = useState<string>("");
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  // Handler untuk perubahan input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Handler untuk klik tombol
  const handleButtonClick = () => {
    setCount(count + 1);
  };

  // Handler untuk fokus dan blur pada input
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  // Handler untuk mouse enter dan leave pada div
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div style={{ padding: "20px" }}>
      {/* Input dengan onChange */}
      <div>
        <label>Input Text:</label>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <p>Input Value: {inputValue}</p>
        <p>{isFocused ? "Input is focused" : "Input is not focused"}</p>
      </div>

      <br />

      {/* Button dengan onClick */}
      <div>
        <button onClick={handleButtonClick}>Click Me!</button>
        <p>Button Click Count: {count}</p>
      </div>

      <br />

      {/* Div dengan onMouseEnter dan onMouseLeave */}
      <div
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: isHovered ? "lightblue" : "lightgray",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid #ccc",
          cursor: "pointer",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered ? "Mouse is over me!" : "Hover over me!"}
      </div>
    </div>
  );
}

export default EventHandler;
