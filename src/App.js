import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem('books');
    return savedBooks ? JSON.parse(savedBooks) : [];
  });
  const [title, setTitle] = useState("");
  const [spineTitle, setSpineTitle] = useState("");
  const [category, setCategory] = useState("spooky");
  const [selectedBook, setSelectedBook] = useState(null);

  const bookDimensions = { width: 25, height: 85 };

  const spineCount = {
    spooky: 10,
    soft: 14,
    colorful: 7,
    fantasy: 13
  };

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const addBook = () => {
    if (title.trim() !== "" && spineTitle.trim() !== "") {
      const spineNumber = Math.floor(Math.random() * spineCount[category]) + 1;
      const newBook = {
        title,
        spineTitle,
        category,
        progress: 0,
        id: Date.now(),
        spineImage: `${category}-${spineNumber}.png`
      };
      setBooks([...books, newBook]);
      setTitle("");
      setSpineTitle("");
    }
  };

  const updateProgress = (id, newProgress) => {
    setBooks(books.map(book => 
      book.id === id ? { ...book, progress: newProgress } : book
    ));
    setSelectedBook(prev => prev && prev.id === id ? { ...prev, progress: newProgress } : prev);
  };

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
    setSelectedBook(null);
  };

  return (
    <div className="App">
      <div className="bookshelf-container">
        <img src={`${process.env.PUBLIC_URL}/bookshelf.jpg`} alt="Bookshelf" className="bookshelf" />
        <div className="books-overlay">
          {books.map((book, index) => (
            <div 
              key={book.id} 
              className="book"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/spines/${book.spineImage})`,
                width: `${bookDimensions.width}px`,
                height: `${bookDimensions.height}px`,
                position: 'absolute',
                left: `${index * bookDimensions.width}px`,
                bottom: '0'
              }}
              onClick={() => setSelectedBook(book)}
            >
              <div className="spine">{book.spineTitle}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="input-container">
        <input
          className="book-input"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="book-input"
          type="text"
          placeholder="Spine"
          value={spineTitle}
          onChange={(e) => setSpineTitle(e.target.value)}
        />
        <select
          className="book-input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="spooky">Spooky</option>
          <option value="fantasy">Fantasy</option>
          <option value="soft">Soft</option>
          <option value="colorful">Colorful</option>
        </select>
        <button onClick={addBook} className="add-button">Add</button>
      </div>
      {selectedBook && (
        <div className="book-details">
          <h2>{selectedBook.title}</h2>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={selectedBook.progress}
            onChange={(e) => updateProgress(selectedBook.id, parseInt(e.target.value))}
          />
          <p>Progress: {selectedBook.progress}%</p>
          <button onClick={() => deleteBook(selectedBook.id)}>Delete</button>
          <button onClick={() => setSelectedBook(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default App;