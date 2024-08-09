import React, { useState } from "react";
import bookshelf from "./bookshelf.jpg"; // Make sure the path to the image is correct
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [spineTitle, setSpineTitle] = useState("");
  const [theme, setTheme] = useState("default");

  const handleAddBook = () => {
    // Logic to add a book to the bookshelf
    console.log("Book added:", { title, spineTitle, theme });
  };

  const handlePickStyle = (style) => {
    setTheme(style);
    // Logic to apply the chosen style
    console.log("Style chosen:", style);
  };

  return (
    <div className="App">
      <img src={bookshelf} alt="Bookshelf" className="bookshelf" />
      <input
        type="text"
        placeholder="Enter Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Spine Title"
        value={spineTitle}
        onChange={(e) => setSpineTitle(e.target.value)}
      />
      <button onClick={handleAddBook}>Add Book</button>
      <button onClick={() => handlePickStyle("spooky")}>Spooky</button>
      <button onClick={() => handlePickStyle("fantasy")}>Fantasy</button>
      <button onClick={() => handlePickStyle("soft")}>Soft</button>
      <button onClick={() => handlePickStyle("colorful")}>Colorful</button>
    </div>
  );
}

export default App;
