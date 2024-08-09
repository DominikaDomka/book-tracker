import React, { useState } from "react";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [spineTitle, setSpineTitle] = useState("");
  const [theme, setTheme] = useState("default");

  const addBook = () => {
    setBooks([...books, { title, spineTitle }]);
    setTitle("");
    setSpineTitle("");
  };

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className="App">
      <img src={`${process.env.PUBLIC_URL}/bookshelf.jpg`} alt="Bookshelf" className="bookshelf" />
      <input
        className="book-input"
        type="text"
        placeholder="Full Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="book-input"
        type="text"
        placeholder="Spine Title"
        value={spineTitle}
        onChange={(e) => setSpineTitle(e.target.value)}
      />
      <button onClick={addBook}>Add Book</button>
      <div>
        <button onClick={() => changeTheme("spooky")}>Spooky</button>
        <button onClick={() => changeTheme("fantasy")}>Fantasy</button>
        <button onClick={() => changeTheme("soft")}>Soft</button>
        <button onClick={() => changeTheme("colorful")}>Colorful</button>
      </div>
      <div className={`bookshelf-${theme}`}>
        {books.map((book, index) => (
          <div key={index} className="book">
            <div className="spine">{book.spineTitle}</div>
            <div className="full-title">{book.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
