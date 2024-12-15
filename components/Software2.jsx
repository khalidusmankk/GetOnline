import React, { useState, useRef } from "react";

const Software2 = () => {
  const [fontFamily, setFontFamily] = useState("Courier New");
  const [fontColor, setFontColor] = useState("#000000");
  const [fontSize, setFontSize] = useState("16px"); // Default font size

  const handleFontChange = (e) => {
    setFontFamily(e.target.value);
  };

  const handleColorChange = (e) => {
    const selectedColor = e.target.value;
    if (selectedColor === "whitesmoke" || selectedColor === "yellow") {
      setFontColor(selectedColor);
      document.getElementById("textarea").style.backgroundColor = "black";
    } else {
      setFontColor(selectedColor);
      document.getElementById("textarea").style.backgroundColor = "white"; // Default background
    }
  };
  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
  };

  const textAreaRef = useRef(null);

  const handleCopy = () => {
    if (textAreaRef.current) {
      textAreaRef.current.select(); // Select all the text in the textarea
      document.execCommand("copy"); // Copy the text to the clipboard
      alert("Text copied to clipboard!"); // Optional: show a confirmation
    }
  };
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "green",
        width: "48%",
        height: "500px",
        borderRadius: "10px",
        border: "5px solid rgb(134, 9, 9)",
        marginLeft: "52%",
        marginBottom: "30px",
      }}
    >
      {/* Dropdown for Font Family */}
      <label htmlFor="fontFamily" style={{ border: "2px solid rgb(134, 9, 9)", backgroundColor: "whitesmoke" }}>
        Choose Font Family:{" "}
      </label>{" "}
      <select
        id="fontFamily"
        value={fontFamily}
        onChange={handleFontChange}
        style={{
          marginRight: "10px",
          width: "160px",
          fontSize: "20px",
          backgroundColor: "yellow",
          fontFamily: "Courier New",
          border: "2px solid rgb(134, 9, 9)",
        }}
      >
        <option value="Arial">Arial</option>
        <option value="Courier New">Courier New</option>
        <option value="Georgia">Georgia</option>
        <option value="Tahoma">Tahoma</option>
        <option value="Verdana">Verdana</option>
        <option value="Times New Roman">Times New Roman</option>
      </select>{" "}
      <br /> <br /> <br />
      {/* Dropdown for Font Color */}
      <label htmlFor="fontColor" style={{ border: "2px solid rgb(134, 9, 9)", backgroundColor: "whitesmoke" }}>
        Choose Font Color:{" "}
      </label>
      <select
        id="fontColor"
        value={fontColor}
        onChange={handleColorChange}
        style={{
          marginRight: "10px",

          fontSize: "20px",
          backgroundColor: "yellow",
          fontFamily: "Courier New",
          border: "2px solid rgb(134, 9, 9)",
          width: "140px",
        }}
      >
        <option value="#000000">Black</option>
        <option value="#FF0000">Red</option>
        <option value="#0000FF">Blue</option>
        <option value="#008000">Green</option>
        <option value="#FFA500">Orange</option>
        <option value="#800080">Purple</option>
        <option value="yellow"> Yellow</option>
        <option value="whitesmoke"> White</option>
      </select>{" "}
      <br /> <br /> <br />
      {/* Dropdown for Font Size */}
      <label htmlFor="fontSize" style={{ border: "2px solid rgb(134, 9, 9)", backgroundColor: "whitesmoke" }}>
        Choose Font Size:{" "}
      </label>
      <select
        id="fontSize"
        value={fontSize}
        onChange={handleFontSizeChange}
        style={{
          marginRight: "10px",
          width: "100px",
          fontSize: "20px",
          backgroundColor: "yellow",
          fontFamily: "Courier New",
          border: "2px solid rgb(134, 9, 9)",
          width: "80px",
        }}
      >
        <option value="12px">12px</option>
        <option value="14px">14px</option>
        <option value="16px">16px</option>
        <option value="18px">18px</option>
        <option value="20px">20px</option>
        <option value="24px">24px</option>
      </select>
      {/* Textarea */} <br /> <br />
      <button
        onClick={handleCopy}
        style={{
          width: "180px",
          height: "50px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "blueviolet",
          color: "white",
          border: "none",
          borderRadius: "5px",
          marginTop: "240px",
          marginLeft: "35%",
        }}
      >
        Copy Text
      </button>
      <div
        style={{
          marginTop: "-300px",
          textAlign: "center",
        }}
      >
        <textarea
          name="message"
          id="textarea"
          rows="15"
          cols="50"
          placeholder="Type Your Message Here"
          ref={textAreaRef}
          style={{
            paddingTop: "10px",
            textAlign: "center",
            fontFamily: fontFamily,
            color: fontColor,
            fontSize: fontSize,
            borderRadius: "20px",
            border: "12px solid rgb(134, 9, 9)",
            width: "500px",
            height: "250px",
            outline: "2px solid whitesmoke",
          }}
        ></textarea>
      </div>
    </div>
  );
};

export default Software2;
