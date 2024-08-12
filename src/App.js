import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem('books');
    return savedBooks ? JSON.parse(savedBooks) : [];
  });
  const [spine, setSpine] = useState('');
  const [fullTitle, setFullTitle] = useState('');
  const [category, setCategory] = useState('spooky');
  const [selectedBook, setSelectedBook] = useState(null);

  const bookWidth = 20; // Adjust as needed
  const bookHeight = 100; // Adjust as needed
  const bookSpacing = 2; // Adjust as needed

  const categories = {
    spooky: 10,
    fantasy: 14,
    soft: 7,
    colorful: 13
  };

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const addBook = () => {
    if (spine.trim() && fullTitle.trim()) {
      const spineNumber = Math.floor(Math.random() * categories[category]) + 1;
      const newBook = {
        id: Date.now(),
        spine: spine.trim(),
        fullTitle: fullTitle.trim(),
        category,
        progress: 0,
        spineImage: `${category}-${spineNumber}.png`
      };
      setBooks([...books, newBook]);
      setSpine('');
      setFullTitle('');
    }
  };

  const updateProgress = (id, progress) => {
    setBooks(books.map(book => 
      book.id === id ? { ...book, progress } : book
    ));
  };

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
    setSelectedBook(null);
  };

  return (
    <div className="App">
      <div className="bookshelf">
        <img 
          src={`${process.env.PUBLIC_URL}/bookshelf.jpg`}
          alt="Bookshelf" 
          className="bookshelf-image" 
        />
        <div className="books-container">
          {books.map((book, index) => (
            <div
              key={book.id}
              className="book"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/spines/${book.spineImage})`,
                backgroundSize: 'cover',
                width: `${bookWidth}px`,
                height: `${bookHeight}px`,
                left: `${index * (bookWidth + bookSpacing)}px`
              }}
              onClick={() => setSelectedBook(book)}
            >
              <div className="spine-text">{book.spine}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="controls">
        <input
          type="text"
          placeholder="Spine"
          value={spine}
          onChange={(e) => setSpine(e.target.value)}
        />
        <input
          type="text"
          placeholder="Full Title"
          value={fullTitle}
          onChange={(e) => setFullTitle(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {Object.keys(categories).map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <button onClick={addBook}>Add Book</button>
      </div>
      {selectedBook && (
        <div className="book-details">
          <h2>{selectedBook.fullTitle}</h2>
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