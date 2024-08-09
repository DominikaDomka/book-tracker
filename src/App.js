import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem('books');
    return savedBooks ? JSON.parse(savedBooks) : [];
  });
  const [title, setTitle] = useState("");
  const [spineTitle, setSpineTitle] = useState("");
  const [theme, setTheme] = useState("default");

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const addBook = () => {
    if (title.trim() !== "" && spineTitle.trim() !== "") {
      const randomSpineNumber = Math.floor(Math.random() * 5) + 1; // Assuming you have 5 spine images
      setBooks([...books, { title, spineTitle, spineImage: `spine${randomSpineNumber}.png` }]);
      setTitle("");
      setSpineTitle("");
    }
  };

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addBook();
    }
  };

  return (
    <div className="App">
      <img src={`${process.env.PUBLIC_URL}/bookshelf.jpg`} alt="Bookshelf" className="bookshelf" />
      <div className="input-container">
        <input
          className="book-input"
          type="text"
          placeholder="Full Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <input
          className="book-input"
          type="text"
          placeholder="Spine Title"
          value={spineTitle}
          onChange={(e) => setSpineTitle(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={addBook} className="add-button">Add Book</button>
      </div>
      <div className="theme-buttons">
        <button onClick={() => changeTheme("spooky")}>Spooky</button>
        <button onClick={() => changeTheme("fantasy")}>Fantasy</button>
        <button onClick={() => changeTheme("soft")}>Soft</button>
        <button onClick={() => changeTheme("colorful")}>Colorful</button>
      </div>
      <div className={`bookshelf-${theme}`}>
        {books.map((book, index) => (
          <div key={index} className="book" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/spines/${book.spineImage})`}}>
            <div className="spine">{book.spineTitle}</div>
            <div className="full-title">{book.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;